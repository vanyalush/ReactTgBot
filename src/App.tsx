import React, {FC, useContext, useEffect} from 'react';
import './App.css';
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Spinner} from "react-bootstrap";

const App = observer(()=> {

    const {user} = useContext(Context);

    useEffect( () => {
        check().then(user => {
            user.setUser(user)
            user.setAuth(true)
        }).finally(() => user.setLoading(false))
    }, [])

    if(user.isLoading){
        return <Spinner animation={"grow"}/>
    }

  return (
      <BrowserRouter>
          <AppRouter/>
      </BrowserRouter>
  );
})

export default App;
