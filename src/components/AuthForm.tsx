import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";

const AuthForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {store} = useContext(Context);
    return (
        <div>
            <input
                type="email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                placeholder="email"
            />
            <input
                type="password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                placeholder="password"
            />
            <button onClick={() => store.login(email, password)}>Login</button>
            <button onClick={() => store.registration(email, password)}>Registration</button>
        </div>
    );
};

export default AuthForm;