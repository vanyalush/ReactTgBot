import React, {FC} from 'react';
import './App.css';
import AuthForm from "./components/AuthForm";

const App:FC = ()=> {
  return (
    <div className="App">
      <AuthForm/>
    </div>
  );
}

export default App;
