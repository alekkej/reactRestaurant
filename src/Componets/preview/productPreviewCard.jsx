import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { addToRedux, removeFromRedux } from '../../store/reducers/products';

import "./productPreview.css";

function ProductPreviewCard() {

    const params = useParams();    
    const id = Number.parseInt(params.id, 10);

    const { title, description, image, price, weight } = useSelector(({dish}) => {
        return dish.list.find((dish) => {
            return dish.id === id;
        })
    });

    const dispatch = useDispatch();

    const addToBasket = () => {
        dispatch(addToRedux({id, title, description, image, price, weight}));
    };

    const removeFromBasket = () => {
        dispatch(removeFromRedux(id));
    };

    const isAdded = useSelector(({ product }) => product.list.find((dish) => dish.id === id));


        return (
        <div className="preview">
            <img className="preview_preview" src={image} />
            <div>
                <h2 className="preview_title">
                {title}
            </h2>
            <p className="preview_description">
                {description}
            </p>
            <div className="preview_price__box">
                
                <div className="preview_price__wrapper">
                    <div>
                        <span className="preview_price">
                            {price} ₽
                        </span>
                        <span className="preview_gram">
                            / {weight} гр.
                        </span>
                    </div>
                    <button className='icon_preview'
                        onClick={isAdded ? removeFromBasket : addToBasket}>
                        {isAdded ? 'Удалить из корзины' : 'Добавить в корзину'}
                    </button>                   
                </div>
            </div>
            </div>
        </div>
    )   
}

export default ProductPreviewCard;