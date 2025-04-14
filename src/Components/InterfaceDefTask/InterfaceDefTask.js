import React from 'react';
import './styles/InterfaceDefTask.css'
import {Container} from "react-bootstrap";
import NavBar from "../NavBar/NavBar";
import TaskCont from "./UI/TaskCont/TaskCont";
import Button from "./UI/Button/Button";

const InterfaceDefTask = () => {
    return (
        <div>
            <NavBar/>
            <Container className="mainContainer">
                <TaskCont/>
                <div className="uploadCont">
                    <h3>Прикрепи сюда</h3>
                    <button className='uploadBtn'>
                        <box-icon name='upload' className='uploadIcon'></box-icon>
                    </button>
                </div>
                <Button>Отправить</Button>
            </Container>

        </div>
    );
};

export default InterfaceDefTask;