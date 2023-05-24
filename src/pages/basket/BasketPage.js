import React from "react";

import BasketGoods from "../../Componets/basket/BasketGoods";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import '../../../src/reset.css';

const BasketPage = () => {

  let navigate = useNavigate();

  function onAuthPage() {
    return navigate('/auth')
  };

  function onProductPageClickHandler() {
    return navigate('/')
  };

  const totalPrice = useSelector(({ product }) => product.totalPrice);

  const dishList = useSelector(({ product }) => product.list)

  return (
    <>
      <div className="basketGoods">
          {dishList?.length === 0 ? (
              <p className="basketNone">В корзине пока что пусто</p>
          ) : (
              dishList.map((dish) => (
                  <BasketGoods key={dish.id} dish={dish} />
              ))
          )}
      </div>
      <div className="basketFooter">
          <p>ЗАКАЗ НА СУММУ: {totalPrice.toLocaleString()} руб.</p>
          <button>Оформить заказ</button>
      </div>
    </>
);

}

export default BasketPage;