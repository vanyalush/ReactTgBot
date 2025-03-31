import React, {useContext, useState} from 'react';
import {Context} from '../index'
import {observer} from "mobx-react-lite";
import './AuthComponents/styles/AuthForm.css'
import {Card, Container, NavLink, Row, Form} from "react-bootstrap";
import AuthButton from "./AuthComponents/UI/Button/AuthButton";
import {INTERFACE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {useLocation, useNavigate} from "react-router-dom";

const AuthFormLogin = observer(() => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    const history = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {user} = useContext(Context);
    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await user.login(email, password);
            } else {
                data = await user.registration(email, password);
            }
            user.setUser(user.user)
            user.setAuth(true)
            history(INTERFACE_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    return (
        <Container className='authCont'>
            <Card className="authCard">
                <h2>Вход</h2>
                <div className="authForm">
                    <Form.Control className='authBtn'
                           onChange={e => setEmail(e.target.value)}
                           value={email}
                           type="text"
                           placeholder='Email'
                    />
                    <Form.Control className='authBtn'
                           onChange={e => setPassword(e.target.value)}
                           value={password}
                           type="password"
                           placeholder='Пароль'
                    />
                </div>
                <Row>
                    <div className='questionAccount'>
                        Нет аккаунта?<NavLink className='navLink' to={REGISTRATION_ROUTE}>Зарегестрируйся!</NavLink>
                    </div>
                </Row>
                <AuthButton onClick={click}>
                    Войти
                </AuthButton>
            </Card>
        </Container>

    );
});

export default AuthFormLogin;