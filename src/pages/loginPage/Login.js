import React, {useState} from 'react';
import './Login.css';
import {useNavigate} from "react-router-dom";
import login from '../../data/login.json';


const Login = ({isAuthenticated, toggleIsAuthenticated}) => {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        const user = login.find((u) => {
            return u.name === username;
        })

        if (user.name === username && user.password === password) {
            return toggleIsAuthenticated(true) + navigate("/blogoverview")
        }
    }


    return (

        <main className="page-container">
            <p>
                Voer hier uw inlog-gegevens in:

            </p>
            <form id="sign-in-form" onSubmit={handleSubmit}>
                <input onChange={(e) => setUsername(e.target.value)}
                       value={username}
                       type="text"
                       name="username"
                       id="username-field"
                       placeholder="username"
                />
                <input onChange={(e) => setPassword(e.target.value)}
                       value={password}
                       type="password"
                       name="password"
                       id="password-field"
                       placeholder="password"/>
                <button type="submit">Login</button>
            </form>

            <p>onzin tekst.....</p>
        </main>

    );
}

export default Login;