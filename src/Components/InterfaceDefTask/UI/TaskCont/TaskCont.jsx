import React from 'react';
import {Container} from "react-bootstrap";
import './TaskCont.css'
import Button from "../Button/Button";

const TaskCont = () => {
    return (
        <Container className="taskCont">
            <div className="rowTask">
                <h3>Тема:</h3>
                <div className="taskTitle">Креативное мышление</div>
            </div>
            <div className="textTask">Нарисуй один и тот же объект в
                10 разных стилях
                (комикс, пиксельарт, аниме)
            </div>
        </Container>
    );
};

export default TaskCont;