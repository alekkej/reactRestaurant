import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logout } from '../../store/reducers/users';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './header.css';

const Header = ({title, hasBackButton, hasBasket}) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    function onBasketPageClickHandler() {
        return navigate('/basket');
    };

    function onBackPageClickHandler() {
        return navigate(-1);
    };
    
    const onLogout = () => {
        dispatch(logout());
        navigate('/auth');
    }

    const totalPrice = useSelector(({product}) => product.totalPrice);
    const productCount = useSelector(({product}) => product.productCount);

    function declOfNum(n, text_forms) {  
        n = Math.abs(n) % 100; 
        const n1 = n % 10;
        if (n > 10 && n < 20) { return text_forms[2]; }
        if (n1 > 1 && n1 < 5) { return text_forms[1]; }
        if (n1 == 1) { return text_forms[0]; }
        return text_forms[2];
    }

    return (
        <div className="header_wrapper">
            { hasBackButton &&
            <button className='back' onClick={onBackPageClickHandler}>
                <FontAwesomeIcon icon={faArrowLeft} style={{color: "#ffffff",}} /> 
            </button>
            }            
            <h1 className="title_wrapper">
                {title}
            </h1>
            <div className="basket_wrapper">           
                { hasBasket && 
                <>                
                    <div className="basket_info">
                        <p>{productCount} {declOfNum(productCount, ['товар', 'товара', 'товаров'])}</p>
                        <p>на {totalPrice} руб.</p>
                    </div>
                    <div>
                        <div className='basket_icon' onClick={onBasketPageClickHandler}>
                            <FontAwesomeIcon icon={faBasketShopping} style={{color: "#ffffff",}} />
                        </div>
                    </div>
                </>}
                <button className='logout' onClick={onLogout}>Выйти</button>
            </div>
        </div>
    )
}

export default Header;