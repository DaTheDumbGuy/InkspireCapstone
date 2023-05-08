import React, { useEffect, useState } from 'react';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import '../../styles/pages/Register.css';
import { register } from '../../services/api';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            try {
                const response = await register(formData);
                console.log('Registration successful with response data:', response.data);
                alert('Registration successful!');
                window.location.href = '/';
            } catch (error) {
                console.error('Error in registration:', error);
            }
        } else {
            setErrors(validationErrors);
        }
    };

    const validate = () => {
        const errors = {};
        if (!formData.username || !formData.email || !formData.password || !formData.confirm_password) {
            errors.fields = 'Fields cannot be empty';
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email address';
        }
        if (formData.password && formData.confirm_password && formData.password !== formData.confirm_password) {
            errors.confirm_password = 'Passwords do not match';
        }
        return errors;
    };
    useEffect(() => {
        setErrors({});
    }, [formData.username, formData.email, formData.password, formData.confirm_password])

    return (
        <main className='register-container'>
            <form method='POST' onSubmit={handleRegister} className='rounded rounded-4'>
                <div className="d-flex justify-content-between">
                    <a href='/'><ArrowBackOutlinedIcon /></a>
                    <h2 className='text-white'>Sign Up</h2>
                </div>
                <div className='form-floating mb-3 mt-4'>
                    <input
                        type='text'
                        name='username'
                        className='form-control'
                        id='username'
                        placeholder='Username'
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                    <label htmlFor='username'>Username</label>
                </div>
                <div className='form-floating mb-3 py-0'>
                    <input
                        type='text'
                        name='email'
                        className='form-control'
                        id='email'
                        placeholder='Email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <label htmlFor='email'>Email</label>
                </div>
                <div className='form-floating mb-3'>
                    <input
                        type='password'
                        name='password'
                        className='form-control'
                        id='password'
                        placeholder='Password'
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    <label htmlFor='password'>Password</label>
                </div>
                <div className='form-floating mb-3'>
                    <input
                        type='password'
                        name='confirm_password'
                        className='form-control'
                        id='confirm_password'
                        placeholder='Confirm Password'
                        value={formData.confirm_password}
                        onChange={handleInputChange}
                    />
                    <label htmlFor='confirm_password'>Confirm Password</label>
                </div>
                <div className='d-flex justify-content-center'>
                    <button type='submit' className='green-BTN'>Sign Up</button>
                </div>

            </form>
            <div className='error-container d-flex align-items-center flex-column'>
                {errors.fields ? (
                    <p className=''>{errors.fields}</p>
                ) : errors.email ? (
                    <p className=''>{errors.email}</p>
                ) : errors.confirm_password ? (
                    <p className=''>{errors.confirm_password}</p>
                ) :
                    ""
                }
            </div>


        </main>
    )
}

export default Register