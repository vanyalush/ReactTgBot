import React, {FC, useContext, useState} from 'react';
import {Context} from '../index'
import {observer} from "mobx-react-lite";
import './AuthComponents/styles/AuthForm.css'
import {Card, Container, NavLink, Row} from "react-bootstrap";
import AuthButton from "./AuthComponents/UI/Button/AuthButton";

const AuthForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const {store} = useContext(Context);
    return (
        <Container className='authCont'>
            <Card className='authCard'>
                <h2>Вход</h2>
                <div className="authForm">
                    <input className='authBtn'
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        placeholder='Email'
                    />
                    <input className='authBtn'
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder='Пароль'
                    />
                </div>
                <Row>
                    {store.isAuth ?
                        <div className='questionAccount'>Нет аккаунта?<NavLink
                            className='navLink'>Зарегестрируйся!</NavLink></div>
                        :
                        <div className='questionAccount'>Есть аккаунт?<NavLink className='navLink'>Войти!</NavLink>
                        </div>
                    }
                </Row>
                <AuthButton onClick={() => store.registration(email, password)}>
                    Регистрация
                </AuthButton>
            </Card>
        </Container>

    );
};

export default observer(AuthForm);