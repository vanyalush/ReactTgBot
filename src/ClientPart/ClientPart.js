import React from 'react';
import NavBar from "../NavBar/NavBar";
import {Container, Dropdown} from "react-bootstrap";
import './styles/ClientPart.css'

const ClientPart = () => {
    return (
        <div>
            <NavBar/>
            <Container className='ClientCont'>
                <div className='everyDayQues'>
                    <h2>Ежедневные задания</h2>
                    <div className='tasks'>
                        <div className='task'>1</div>
                        <div className='task'>2</div>
                        <div className='task'>3</div>
                        <div className='task'>4</div>
                        <div className='task'>5</div>
                        <div className='task'>6</div>
                        <div className='task'>7</div>
                    </div>
                </div>
                <div className='defaultQues'>
                    <h3>Обычные задания</h3>
                    <div className='textDefQues'>
                        <box-icon name='objects-vertical-bottom'></box-icon>
                        <h3>Уровень сложности</h3>
                    </div>
                    <div className='difficulties'>
                        <div className='easy'>
                            <Dropdown className='dropdown'>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Лёгкий
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropMenu'>
                                    <Dropdown.Item href="#">Начать</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='normal'>
                            <Dropdown className='dropdown'>
                                <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                    Нормальный
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropMenu'>
                                    <Dropdown.Item href="#">Начать</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className='hard'>
                            <Dropdown className='dropdown'>
                                <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                    Сложный
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='dropMenu'>
                                    <Dropdown.Item href="#">Начать</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ClientPart;