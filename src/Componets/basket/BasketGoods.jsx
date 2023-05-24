import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { removeFromRedux } from '../../../src/store/reducers/products';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "./basket.css";

const BasketGoods = ({dish}) => {

    const dispatch = useDispatch();

    const {id, image, title, price} = dish;

    const removeFromBasket = (event) => {
        dispatch(removeFromRedux(id));

        event.stopPropagation();
    }; 

    const navigate = useNavigate();

    const onCardClickHandler = () => {
        navigate(`/dish/${id}`)
    };

    return (
        <div className="basketList" >

            <div className="basketList__wrapper" onClick={onCardClickHandler}>

                <img className="basket_preview" src={image} />

                <h2 className="basket_title">
                    {title}
                </h2>

                <span className="basket_price">
                    {price.toLocaleString()} Р.
                </span>
                <span className="basket_delete"
                onClick={ removeFromBasket }>
                    <FontAwesomeIcon icon={faXmark} style={{color: "#ffffff",}} />
                </span>

            </div>

        </div>
    )
}

export default BasketGoods;