import {Context} from "./index";
import {observer} from "mobx-react-lite";
import React, { useContext, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Spinner} from "react-bootstrap";

const App = () => {

    const {user} = useContext(Context);

    useEffect( () => {
        if (localStorage.getItem("token")){
            user.checkAuth()
        }
    }, [user])

    if(user.isLoading){
        return
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;