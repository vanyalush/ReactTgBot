import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import './index.css'

interface State{
    user:UserStore;
}

const user = new UserStore();

export const Context = createContext<State>({
    user,
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Context.Provider value={{user}}>
            <App/>
        </Context.Provider>
    </React.StrictMode>
);
