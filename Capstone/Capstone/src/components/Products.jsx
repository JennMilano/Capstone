import { useFetchProductsQuery } from "../api/API";
import { useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
    const { data, isLoading, isError } = useFetchProductsQuery();
    console.log("Product data:", data);

    if (isLoading) {
        return <section>
            <h2>Loading...</h2>
        </section>;
    };

    if (isError) {
        return <section>
            <h2>Flag on the play!</h2>
        </section>;
    };

    return (
        <>
            <h2>Products</h2>
            <section className="products-container">
                {data.map((product) => (
                    <div key={product.id} className="product-card">
                        <img className="product-image" src={product.image} alt={product.name} />
                    <div className="product-info">
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button className="Details-button">
                            <Link to={`/products/${product.id}`}>View Details</Link>
                        </button>

                    </div>
                    </div>
                ))}
        </section>
        </>     
    );
    
    
    
};


export default Products;