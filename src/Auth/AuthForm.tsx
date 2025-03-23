import React, {FC, useContext, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import MyInput from "./UI/Input/MyInput";
import './styles/AuthForm.css'
import MyButton from "./UI/Button/MyButton";
import {NavLink, Row} from "react-bootstrap";

const AuthForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {store} = useContext(Context);
    return (
        <div className='authCont'>
            <h2>Вход</h2>
            <div className="authForm">
                <MyInput
                    type="email"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    value={email}
                    placeholder="email"
                />
                <MyInput
                    type="password"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    value={password}
                    placeholder="password"
                />
            </div>
            <Row>
                {store.isAuth ?
                    <div className='questionAccount'>Нет аккаунта?<NavLink
                        className='navLink'>Зарегестрируйся!</NavLink></div>
                    :
                    <div className='questionAccount'>Есть аккаунт?<NavLink className='navLink'>Войти!</NavLink></div>
                }
            </Row>
            <MyButton onClick={() => store.login(email, password)}>вход</MyButton>
        </div>

    );
};

export default observer(AuthForm);