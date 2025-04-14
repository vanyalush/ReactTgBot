import React from 'react';
import NavBar from "../NavBar/NavBar";
import {Container} from "react-bootstrap";
import './styles/ClientPart.css'
import Difficulties from "./UI/Difficulties/Difficulties";
import Motivation from "./UI/MotivationCont/Motivation";
import EveryDayQues from "./UI/EveryDayQues/EveryDayQues";
import AuthButton from "./UI/Button/AuthButton";

const ClientPart = () => {
    return (
        <div>
            <NavBar/>
            <Container className='ClientCont'>
                <EveryDayQues/>
                <Motivation/>
                <AuthButton>Создать персонажа</AuthButton>
                <div className='defaultQues'>
                    <div className='textDefQues'>
                        <box-icon name='objects-vertical-bottom' className='iconDiff'></box-icon>
                        <h3>уровень сложности задания</h3>
                    </div>
                    <Difficulties/>
                </div>
            </Container>
        </div>
    );
};

export default ClientPart;