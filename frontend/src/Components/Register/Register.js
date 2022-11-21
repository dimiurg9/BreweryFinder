import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth.service';
import './Register.css';

export default function Register(props) {
    let navigate = useNavigate();

    const [registerInfo, setRegisterInfo] = useState({
        username: '',
        name: '',
        emailAddress: '',
        password: '',
        confirmPassword: '',
        role: 'USER',
    });

    const handleInputChange = (event) => {
        event.preventDefault();
        setRegisterInfo((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (registerInfo.password === registerInfo.confirmPassword) {
            AuthService.register(registerInfo).then((response) => {
                if (response === 201) navigate('/login');
            });
        } else {
            alert('Password and Confirm Password must match!!!');
        }
    };

    return (
        <div>
            <h1>Create Account</h1>
            <form>
                <label className='sr-only'>Username</label>
                <input
                    type='text'
                    id='username'
                    name='username'
                    className='form-control'
                    placeholder='Username'
                    autoComplete='username'
                    onChange={handleInputChange}
                    required
                />
                <label className='sr-only'>Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    className='form-control'
                    placeholder='Name'
                    autoComplete='username'
                    onChange={handleInputChange}
                    required
                />
                <label className='sr-only'>Email</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    className='form-control'
                    placeholder='Email'
                    autoComplete='email'
                    onChange={handleInputChange}
                    required
                />
                <label className='sr-only'>Password</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    className='form-control'
                    placeholder='Password'
                    autoComplete='new-password'
                    onChange={handleInputChange}
                    required
                />
                <input
                    type='password'
                    id='password-confirm'
                    name='confirmPassword'
                    className='form-control'
                    placeholder='Confirm Password'
                    autoComplete='new-password'
                    onChange={handleInputChange}
                    required
                />
                <Link to='/login'>Have an account?</Link>
                <button
                    type='submit'
                    onClick={handleSubmit}
                >
                    Create Account
                </button>
            </form>
        </div>
    );
}
