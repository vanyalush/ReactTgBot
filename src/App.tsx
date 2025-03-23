import React, {FC, useContext, useEffect} from 'react';
import './App.css';
import AuthForm from './Auth/AuthForm'
import {Context} from "./index";
import {observer} from "mobx-react-lite";

const App:FC = ()=> {

    const {store} = useContext(Context);

    useEffect( () => {
        if (localStorage.getItem("token")){
            store.checkAuth()
        }
    }, [store])

    if(store.isLoading){
        return <div>Loading...</div>
    }

    if(!store.isAuth){
        return(
            <AuthForm/>
        )
    }

  return (
    <div className="App">
        <h2>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : 'Авторизуйтесь'}</h2>
        <button onClick={() => {store.logout()}}>Logout</button>
    </div>
  );
}

export default observer(App);
