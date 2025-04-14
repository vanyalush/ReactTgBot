import React from 'react';
import {Container} from "react-bootstrap";
import './EveryDayQues.css'

const EveryDayQues = () => {
    return (
        <Container>
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
        </Container>
    );
};

export default EveryDayQues;