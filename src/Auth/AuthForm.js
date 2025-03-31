import React, {useContext, useState} from 'react';
import {Context} from '../index'
import {observer} from "mobx-react-lite";
import './AuthComponents/styles/AuthForm.css'
import {Container, Row, Form} from "react-bootstrap";
import AuthButton from "./AuthComponents/UI/Button/AuthButton";
import {INTERFACE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Link, useLocation, useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthForm = observer(() => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    const history = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {user} = useContext(Context);
    const [error, setError] = useState(null);
    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await user.login(email, password);
            } else {
                data = await user.registration(email, password);
            }
            user.setUser(data.user)
            user.setAuth(true)
            history(INTERFACE_ROUTE)
        } catch (e) {
            const errorMessage = e.response?.data?.message || "Произошла ошибка";
            setError(errorMessage);
        }
    }
    return (
        <Container className='authCont'>
            <div className="authCard">
                <h2>{isLogin ? 'Вход' : "Регистрация"}</h2>
                {error && <div className="auth-error">{error}</div>}
                <div className="authForm">
                    <input
                        className='authBtn'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        placeholder='Email'
                    />
                    <input
                        className='authBtn'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder='Пароль'
                    />
                </div>
                <Row>
                    {isLogin ?
                        <div className='questionAccount'>
                            Нет аккаунта?<Link className='navLink' to={REGISTRATION_ROUTE}>Зарегестрируйся!</Link>
                        </div>
                        :
                        <div className='questionAccount'>
                            Есть аккаунт?<Link className='navLink' to={LOGIN_ROUTE}>Войди!</Link>
                        </div>
                    }
                </Row>
                <AuthButton onClick={click}>
                    {isLogin ? 'Войти' : 'Регистрация'}
                </AuthButton>

            </div>
        </Container>
    );
});

export default AuthForm;