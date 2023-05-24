import React, { useState } from "react";
import axios from "../../utils/axios";

import { useDispatch } from "react-redux";

import { Input } from '../../Componets/';
import { login } from "../../store/reducers/users";

import '../../Componets/auth/auth.css';

const AuthView = ({ changeView }) => {

    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const onUpdate = (field, value) => {
        setUserData((prevState) => ({
            ...prevState,
            [field]: value,
        }))
    };

    const onLogin = () => {
        axios.post("/login", userData)
            .then(({ data }) => dispatch(login({
                accessToken: data.accessToken,
                ...data.user,
            })));
    };

    const emailValueValidate = (email, onError) => {
        if (!email) {
            onError("Введите E-mail");
            return false;
        };

        const regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;

        if (!regExpEmail.test(email)) {
            onError("Некорректный E-mail");
            return false;
        };

        onError('');
        return true;
    };

    const passwordValueValidate = (password, onError) => {
        if (!password) {
            onError("Введите пароль");
            return false;
        };
        
        const regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;

        if (!regExpPassword.test(password)) {
            onError("Некорректный пароль");
            return false;
        };

        onError('');
        return true;
    };
    
    return (
        <div className="background">
            <div className="auth__wrapper">
                <p className="auth__link" onClick={changeView}>
                    Регистрация
                </p>
                <h1 className="auth__title">Войти</h1>
                <Input type={'email'} placeholder={'E-mail'} onUpdate={onUpdate}
                    validate={emailValueValidate} />
                <Input type={'password'} placeholder={'Пароль'} onUpdate={onUpdate}
                    validate={passwordValueValidate} />
                <button className="auth__button" onClick={onLogin}>
                    Войти
                </button>
            </div>
        </div>
    );
};

const RegView = ({ changeView }) => {

    const dispatch = useDispatch();

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    });

    const onUpdate = (field, value) => {
        setUserData((prevState) => ({
            ...prevState,
            [field]: value,
        }))
    };

    const emailValueValidate = (email, onError) => {
        if (!email) {
            onError("Введите E-mail");
            return false;
        };

        const regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\\.,;:\s@"]+\.)+[^<>()\[\]\\.,;:\s@"]{2,})$/i;

        if (!regExpEmail.test(email)) {
            onError("Некорректный E-mail");
            return false;
        };

        onError('');
        return true;
    };

    const passwordValueValidate = (password, onError) => {
        if (!password) {
            onError("Введите пароль");
            return false;
        };
        
        const regExpPassword = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/;

        if (!regExpPassword.test(password)) {
            onError("Некорректный пароль");
            return false;
        };

        onError('');
        return true;
    };
    
    const onRegister = (onError) => {        
        const isChecked = document.querySelector('.checkbox').checked;

        if (!isChecked) {;
            return;
        }      
        axios.post("/register", userData)
            .then(({ data }) => dispatch(login({
                accessToken: data.accessToken,
                ...data.user,
            })));
    };

    return (
        <>
            <div className="background"></div>
                <div className="auth__wrapper">
                    <p className="auth__link" onClick={changeView}>
                        Войти
                    </p>
                    <h1 className="auth__title">Регистрация</h1>
                    <Input type={'email'} placeholder={'E-mail'} onUpdate={onUpdate}
                        validate={emailValueValidate} />
                    <Input type={'password'} placeholder={'Пароль'} onUpdate={onUpdate}
                        validate={passwordValueValidate} />
                    <label className="checkbox-label">
                        <input type="checkbox" className="checkbox" />
                        Получать специальные предложения на почту
                    </label>
                    <button className="auth__button" onClick={onRegister}>
                        Регистрация
                    </button>
            </div>
        </>         
    );
};

const Auth = () => {
    const [isAuthView, setAuthViewState] = useState(false);

    const changeView = () => {
        setAuthViewState(prevState => !prevState);
    };

    return (
        <>
            {isAuthView ? (
                <AuthView changeView={changeView} />
            ) : (
                <RegView changeView={changeView} />
            )}
        </>
    );
};

export default Auth;