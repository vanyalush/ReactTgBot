import React from 'react';
import classes from './AuthInput.module.css'


const AuthInput = (props) => {
    return (
        <input className={classes.myInput} {...props} />
    );
};

export default AuthInput;