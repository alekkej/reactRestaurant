import React, { useState } from 'react';

import { addToRedux, removeFromRedux } from '../../../src/store/reducers/products';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import './card.css';


const ProductCard = ({ dish }) => {

    const { id, title, description, image, price, weight } = dish;

    const isAdded = useSelector(({ product }) => product.list.find((dish) => dish.id === id));

    const dispatch = useDispatch();

    const addToBasket = () => {
        dispatch(addToRedux(dish));
    };

    const removeFromBasket = () => {
        dispatch(removeFromRedux(id));
    };

    const navigate = useNavigate();

    const onCardClickHandler = () => {
        navigate(`/dish/${id}`)
    };

    return (
        <div className="card" >
            <img className="card_preview" src={image} alt={title} onClick={onCardClickHandler}/>
            
                <h2 className="card_title">
                {title}
            </h2>
            <p className="card_description">
                {description}
            </p>

            <div className="card_price__box">
                <div className="card_price__wrapper">
                    <div>
                        <span className="card_price">
                            {price.toLocaleString()} Р.
                        </span>
                        <span className="card_gram">
                            / {weight} гр.
                        </span>
                    </div>
                    <button className='icon_basket'
                        onClick={isAdded ? removeFromBasket : addToBasket}>

                        <FontAwesomeIcon icon={isAdded ? faXmark : faPlus} size="lg"
                            style={{ color: "#ffffff" }} />

                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;