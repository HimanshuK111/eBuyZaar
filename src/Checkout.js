import { SportsBasketball } from "@mui/icons-material";
import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from "./Subtotal.js";
import {useStateValue} from "./StateProvider";


function Checkout(){
    const[{basket}, dispatch]= useStateValue();
    return(
        <div className="Checkout">
            {/* Left Section : Products */}

            <div className="Checkout__left">
               <div className="checkout__adContainer">
                   <img
                      src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/d94141ed984b3d92.jpg?q=50"
                       alt="Checkout Ad"
                      className="checkout__ad"
                    />
                </div>

                <div>
                    <h2 className="Checkout__title">
                        Your Shopping Basket
                    </h2>
                    {basket.map((item) => (
                       <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                       />
                    ))}

                 </div>
                </div>

                {/* Right Section : Subtotal */}
                <div className="Checkout__right">
                    <Subtotal/>
                </div>
            </div>

        
    )
}

export default Checkout