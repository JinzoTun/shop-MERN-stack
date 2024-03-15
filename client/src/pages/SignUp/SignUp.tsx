import React, { useState } from 'react';
import { signUp } from '../../api';

const SignUpPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            const response = await signUp(email); // Removed the extra argument
            console.log('Sign up response:', response);
        } catch (error) {
            console.error('Sign up error:', error);
        } finally {
            setEmail('');
            setPassword('');
        } 
    }
    
    return (
        <div>
            <h2>Sign Up</h2>
            <form>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="button" onClick={handleSignUp}>
                    Sign Up
                </button>
            </form>
            {signUp} {/* Replaced <SignUp /> with {signUp} */}
        </div>
    );
};

export default SignUpPage;