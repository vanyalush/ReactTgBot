import React from 'react';
import {Container} from "react-bootstrap";
import './Motivation.css'

const Motivation = () => {
    return (
        <Container>
            <div className='motivation'>
                <h2 className='motivationTitle'>Вдохновение и мотивация</h2>
                <div className='motivCont'>
                    <h4 className='quote'>Сложнее всего начать действовать, все остальное зависит только от
                        упорства.</h4>
                    <div className='motivRow'>
                        <h4 className='author'>Амелия Эрхарт</h4>
                        <div className='refreshBtn' href="#">
                            <box-icon name='refresh' color='#ffffff' className='iconRefresh'></box-icon>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Motivation;