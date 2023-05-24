import React from "react";
import ProductPreviewCard from "../../Componets/preview/productPreviewCard";
import Header from '../../Componets/header/Header';

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function ProductPreviewPage({}) {

    const { id } = useParams();

    const { title, description, image, price, weight } = useSelector(({dish}) => {
        return dish.list.find((dish) => {
            return dish.id === Number.parseInt(id);
        })
    })

    return(
        <div>
            <Header hasBackButton hasCart/>
            <ProductPreviewCard />
        </div>
    )    
}

export default ProductPreviewPage;