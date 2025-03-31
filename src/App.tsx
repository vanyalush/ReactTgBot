import {Context} from "./index";
import {observer} from "mobx-react-lite";
import React, {FC, useContext, useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

const App:FC = ()=> {

    const {user} = useContext(Context);

    useEffect( () => {
        if (localStorage.getItem("token")){
            user.checkAuth()
        }
    }, [user])

    if(user.isLoading){
        return <div>Loading...</div>
    }

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default observer(App);