import React from "react";
import "./Product.css";
import {useStateValue} from "./StateProvider";

function Product({id, image, title, price, rating }) {
    const [state, dispatch] = useStateValue();
    const addToBasket =() => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title, 
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return(
        <div>
            <div className="product">
                <div className="product_info">
                    <p>{title}</p>
                    <p className="product__price">
                        <small>Rs.</small>
                        <strong>{price}</strong>
                    </p>
                    <div className="product__rating">
                    {Array(Math.round(rating))
                       .fill()
                       .map((_,i)=> (
                        <span key = {i}>⭐</span>
                       ))}
                </div>
                
                </div>
                <img src={image}/>
                <button onClick={addToBasket}> Add to Basket</button>
            </div>
        </div>
    )
}

export default Product