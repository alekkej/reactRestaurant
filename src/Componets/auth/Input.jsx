import React, { useState } from "react";
import "./auth.css";

const Input = ({ type, placeholder, onUpdate, validate }) => {
    const [value, setValue] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const onInputHandler = ({ target }) => {
        const { value } = target;

        setValue(value);

        if (validate && validate(value, onError)) {
            onUpdate(type, value)
        }
        else {onUpdate(type, '')};
    };

    const onError = (errorMessage) => {
        setErrorMessage(errorMessage);
    };

    return (
        <>
            <input type={type} placeholder={placeholder}
            value={value} onInput={onInputHandler}
            className="auth__input" />
            { errorMessage && <span className="auth__error">{errorMessage}</span> }
        </>
    );
};

export default Input;
