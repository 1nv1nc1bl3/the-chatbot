import { useState } from 'react';
import hideIcon from './assets/hide.png';
import showIcon from './assets/visible.png';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const inputsStyle = {
        border: '1px solid #333',
        borderRadius: '7px',
        height: '50px',
        width: '280px',
        padding: '12px 25px 12px 12px',
    };

    const buttonsStyle = {
        color: '#fff',
        background: '#007bff',
        padding: '12px 25px',
        borderRadius: '7px',
        height: '50px',
        cursor: 'pointer',
    };

    const iconsStyle = {
        width: '30px',
        filter: 'invert(1)',
    };

    const showPass = (
        <img style={iconsStyle} src={showIcon} alt='show password' />
    );
    const hidePass = (
        <img style={iconsStyle} src={hideIcon} alt='hide password' />
    );

    return (
        <div className='login-form p-5'>
            <h1 className='text-3xl pb-8'>Hello, welcome to my website</h1>
            <div className='flex flex-col justify-start gap-2'>
                <input type='text' style={inputsStyle} placeholder='Email' />
                <div className='flex gap-4'>
                    <input
                        type={`${showPassword ? 'text' : 'password'}`}
                        style={inputsStyle}
                        placeholder='Password'
                    />
                    <button
                        onClick={() => setShowPassword((prev) => !prev)}
                        style={buttonsStyle}
                    >
                        {showPassword ? hidePass : showPass}
                    </button>
                </div>
            </div>
            <div className='flex gap-4 mt-4'>
                <button style={buttonsStyle}>Login</button>
                <button style={buttonsStyle}>Sign up</button>
            </div>
        </div>
    );
};

export default LoginForm;
