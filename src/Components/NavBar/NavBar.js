import React, {useContext, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {INTERFACE_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import './styles/NavBar.css'
import 'boxicons'
import {Offcanvas} from "react-bootstrap";
import {Context} from "../index";
import {Link} from "react-router-dom";

const NavBar = ({ name, ...props }) => {
    const {user} = useContext(Context);
    const [showMainMenu, setShowMainMenu] = useState(false);

    const handleMainMenuClose = () => setShowMainMenu(false);
    const handleMainMenuShow = () => setShowMainMenu(true);
    return (
        <div className="navbar">
            <div className='NavContainer'>
                <div className='mainSettings'>
                    <button className='mainTransferBtn' to={INTERFACE_ROUTE} onClick={handleMainMenuShow}>
                        <box-icon name='menu' color='#ffffff' className='menu'></box-icon>
                    </button>
                    <Offcanvas className='offcanvas' key={1} show={showMainMenu} onHide={handleMainMenuClose} {...props}>
                        <Offcanvas.Header className='offcanvasHeader' closeButton/>
                        <Offcanvas.Body className='offcanvasBody'>
                            <button className='offcanvasTitle'>
                                <box-icon className='titleIcon' name='cog' type='solid' color='#ffffff'></box-icon>
                                <Link className='offcanvasLink'>Настройки</Link>
                            </button>
                            <button className='offcanvasTitle'>
                                <box-icon className='titleIcon' name='user-circle' type='solid' color='#ffffff'></box-icon>
                                <Link className='offcanvasLink'>Профиль</Link>
                            </button>
                            <button className='offcanvasTitle'>
                                <box-icon className='titleIcon' name='hand' type='solid' color='#ffffff'></box-icon>
                                <Link className='offcanvasLink'>Поддержка</Link>
                            </button>
                            <button className='offcanvasTitle'>
                                <box-icon className='titleIcon' name='message-dots' type='solid' color='#ffffff'></box-icon>
                                <Link className='offcanvasLink'>Чат</Link>
                            </button>
                            <button className='offcanvasTitle'>
                                <box-icon className='titleIcon' name='log-out' color='#ffffff'></box-icon>
                                <Link className='offcanvasLink' to={LOGIN_ROUTE}
                                      onClick={() => user.logout()}>Выйти</Link>
                            </button>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                <div className='interface'>
                    <div className='transfer' href="#">
                        <box-icon name='bell' color='#ffffff' className='menu'></box-icon>
                    </div>
                    <div className='transfer' href="#">
                        <box-icon name='calendar-alt' color='#ffffff' className='menu'></box-icon>
                    </div>
                    <div className='transfer' href="#">
                        <box-icon name='circle' type='solid' color='#ffffff' className='menu'></box-icon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;