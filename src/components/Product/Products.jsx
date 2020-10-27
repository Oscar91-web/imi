import React, { } from "react";


const Products = ({ products, setProduct }) => {
    
    console.log(products)
    let CustomersList = products.map(function (p) {
        return <ul key={p.product_id} onClick={() => setProduct(p)}>
            <li> {p.product_id}</li>
            <li> {p.description} </li>
            <li> {p.unit}</li>
            
            
        </ul>
    });

    return (
        <div className="results">
            {/* retunerar meny för sökresultat */}
            
            {/* retunerar sökresultat */}
            <div className="options_results">
                {CustomersList}
            </div>
        </div>
    )
}

export default Products;