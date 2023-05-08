const mySql = require('mysql2');
const encrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = mySql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT
});
const promiseConnection = db.promise();

function magic(value) {
    return value.trim().charAt(0).toUpperCase() + value.trim().slice(1);
}

exports.checkUsers = (req, res) => {
    db.query(`SELECT * FROM accounts`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.json(result);
        }
    })
}
exports.loginStatus = (req, res) => {
    if (req.session.account_id) {
        res.status(200).json({ account_id: req.session.account_id });
    } else {
        // res.status(401).send('User not logged in');
    }
}

exports.userData = async (req, res) => {
    console.log("You are here in userData");
    try {
        console.log(req.session.account_id);
        const [user] = await promiseConnection.query('SELECT * FROM accounts WHERE account_id = ?', [req.session.account_id]);
        console.log(user);
        if (user) {
            res.json(user[0]);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

exports.registerAccount = async (req, res) => {
    console.log("You are here on register");
    let { username, email, password } = req.body;

    username = magic(username);
    email = email.trim();
    password = password.trim();

    try {
        const existingUser = await promiseConnection.query(`SELECT * FROM accounts WHERE email = ?`, [email]);
        if (existingUser[0].length > 0) {
            console.log(existingUser[0]);
            return res.status(409).send({
                message: "User Account Already Exists"
            });
        }

        const hashPassword = await encrypt.hash(password, 8);

        const newUser = {
            username: username,
            email: email,
            password: hashPassword,
        };

        await promiseConnection.query(`INSERT INTO accounts SET ?`, [newUser]);
        return res.status(201).send({
            message: "User Account Has Been Added Successfully"
        });

    } catch (err) {
        console.log(`Error: ${err}`);
        return res.status(500).send({
            message: "Error Occurred"
        });
    }
}

exports.loginAccount = async (req, res) => {
    console.log("This is logged in!");
    const { email, password } = req.body;
    console.log(`You logged in this -> Email: ${email}, Password :${password} `);

    try {
        const [data] = await promiseConnection.query('SELECT * FROM accounts WHERE email = ?', [email]);
        console.log([data]);
        if (!data[0]) {
            console.log("email is incorrect");
            res.status(401).json({ status: 'error', message: 'Email is incorrect' });
        } else {
            const passwordMatch = await encrypt.compare(password, data[0].password);
            if (!passwordMatch) {
                console.log("password do not match");
                res.status(401).json({ status: 'error', message: 'Password is incorrect' });
            } else {
                console.log("you logged in!");
                req.session.account_id = data[0].account_id;
                console.log(req.session.account_id);
                res.json({ status: 'success', message: 'Login successful' });
            }
        }
    } catch (err) {
        console.log(`Error: ${err}`);
        res.status(500).json({ status: 'error', message: 'Server error' });
    }
}

exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log('Error ending session:', err);
            res.status(500).send('Error ending session');
        } else {
            console.log('Session ended(server)');
            res.status(200).send('Session ended');
        }
    });
};
