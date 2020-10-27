import React, { } from "react";


const Product = ({ product }) => {
    if (product) {
        return (
            <div className ="details">
                <ul>
                    <li className="detailsTop"> {product.product_id}</li>
                    <li className="detailsTop"> <label>{product.description}</label></li>
                    <li className="detailsTop detailsRight"> <label>{product.unit}</label></li>
                    

                </ul>
            </div>
        )
    }
    else return (<div className ="details">
        <div className="detailsTop"></div>
        
    </div>);
}

export default Product;