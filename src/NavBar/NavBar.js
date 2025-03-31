import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {INTERFACE_ROUTE} from "../utils/consts";
import './styles/NavBar.css'
import 'boxicons'
import {Offcanvas} from "react-bootstrap";

const NavBar = ({ name, ...props }) => {
    const [showMainMenu, setShowMainMenu] = useState(false);
    const [showProfileMenu, setShowProfileMenu] = useState(false);

    const handleMainMenuClose = () => setShowMainMenu(false);
    const handleMainMenuShow = () => setShowMainMenu(true);
    const handleProfileMenuClose = () => setShowProfileMenu(false);
    const handleProfileMenuShow = () => setShowProfileMenu(true);
    return (
        <div className="navbar">
            <div className='NavContainer'>
                <div className='mainSettings'>
                    <button className='mainTransferBtn' to={INTERFACE_ROUTE} onClick={handleMainMenuShow}>
                        <box-icon name='menu' color='#ffffff'></box-icon>
                    </button>
                    <Offcanvas className='offcanvas' key={1} show={showMainMenu} onHide={handleMainMenuClose} {...props}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Настройки</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            someone
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                <div className='interface'>
                    <div className='transfer' href="#">
                        <box-icon name='sun' color='#ffffff'></box-icon>
                    </div>
                    <div className='transfer' href="#">
                        <box-icon name='bell' color='#ffffff'></box-icon>
                    </div>
                    <div className='transfer' href="#">
                        <box-icon name='calendar-alt' color='#ffffff'></box-icon>
                    </div>
                    <div className='profileSettings'>
                        <button className='transferBtn' href="#" onClick={handleProfileMenuShow}>
                            <box-icon name='circle' type='solid' color='#ffffff'></box-icon>
                        </button>
                        <Offcanvas className='offcanvas' key={2} placement={"end"} show={showProfileMenu} onHide={handleProfileMenuClose} {...props}>
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title>Настройки</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                someone
                            </Offcanvas.Body>
                        </Offcanvas>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;