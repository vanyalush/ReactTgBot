import React from 'react';
import {Container, Dropdown} from "react-bootstrap";
import './Difficulties.css'
import {DEFAULT_TASK} from "../../../../utils/consts";
import {Link} from "react-router-dom";

const Difficulties = () => {
    return (
        <Container className='difficulties'>
            <div className='easy'>
                <Dropdown className='dropdown'>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Лёгкий
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropMenu'>
                        <Dropdown.Item><Link className='dropItemTransfer' to={DEFAULT_TASK}>Начать</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className='normal'>
                <Dropdown className='dropdown'>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        Нормальный
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropMenu'>
                        <Dropdown.Item><Link className='dropItemTransfer' to={DEFAULT_TASK}>Начать</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className='hard'>
                <Dropdown className='dropdown'>
                    <Dropdown.Toggle variant="danger" id="dropdown-basic">
                        Сложный
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropMenu'>
                        <Dropdown.Item><Link className='dropItemTransfer' to={DEFAULT_TASK}>Начать</Link></Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </Container>
    );
};

export default Difficulties;