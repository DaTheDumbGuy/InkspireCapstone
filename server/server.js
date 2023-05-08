const express = require('express');
const app = express();
const port = 1111;
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const session = require('express-session');
const authRoutes = require('./routes/auth');

// require('dotenv').config({ path: './.env' });

app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 } // expires in one hour
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
