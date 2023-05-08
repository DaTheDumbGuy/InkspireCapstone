import React, { useState, useEffect } from 'react';
import { login } from '../../services/api';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import '../../styles/pages/Login.css';


function Login() {
    const [serverError, setServerError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };


    const handleLogin = async (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await login(formData);
                console.log(response.data);
                console.log('Redirecting to dashboard...');
                window.location.href = '/';

            } catch (error) {
                console.error(error);

                if (error.response.status === 401) {
                    setServerError('Invalid email or password')
                } else {
                    setServerError('Server error');
                }
            }
        } else {
            setErrors(validationErrors);
        }
    };

    const validate = () => {
        const errors = {};
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email address';
        }
        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        }
        return errors;
    };
    useEffect(() => {
        setErrors({});
        setServerError('');
    }, [formData.email, formData.password]);

    console.log(formData.email);
    return (
        <main className='login-container'>
            <form onSubmit={handleLogin} className='rounded rounded-4'>
                <div className='d-flex justify-content-between '>
                    <a href='/'><ArrowBackOutlinedIcon className='text-light' /></a>
                    <h2 className='text-light'>Sign In</h2>
                </div>

                <div className="form-floating mb-3 mt-4">
                    <input
                        type="text"
                        id="email"
                        name='email'
                        className='form-control'
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder='Email'
                    />
                    <label htmlFor='email'>Email</label>
                </div>

                <div className="form-floating mb-3 mt-4">
                    <input
                        type="password"
                        id="password"
                        name='password'
                        className='form-control'
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder='Password'
                    />
                    <label htmlFor='email'>Password</label>
                </div>

                <div className="d-flex align-items-center flex-column mt-4">
                    <button type="submit" className='green-BTN mb-2'>Sign In</button>
                    <p className='text-light'>Forgot Password? <a href='/' className='text-decoration-none' style={{ color: "aquamarine" }}>Tap Here</a></p>
                </div>

                <div className='d-flex justify-content-center align-items-end' style={{ height: "100px" }}>
                    <p className='text-light'>Don't have an account? <a href="/register" className='text-decoration-none' style={{ color: "aquamarine" }}>register here!</a></p>
                </div>
            </form>
            <div className='error-container d-flex align-items-center flex-column'>
                {errors.email ? (<p>{errors.email}</p>) : errors.password ? (<p>{errors.password}</p>) : serverError ? (<p>{serverError}</p>) : ''}
            </div>
        </main>
    );
}

export default Login;
