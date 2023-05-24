import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDishList } from '../../store/reducers/dish';

import ProductCard from "../../Componets/products/ProductCard.jsx";

import '../../../src/reset.css';

const ProductsPage = () => {

  const dishes = useSelector(({ dish }) => dish.list);  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishList());
  }, []);
  
  return (    
      <div className="App">
        <div className="app_wrapper">
        {dishes.map((dish) => <ProductCard key={dish.id} dish={dish}/>)}
        </div>
      </div>
    )
}

export default ProductsPage;