import { useParams } from "react-router-dom";
import React from "react";
import { useFetchSingleProductQuery } from "../api/API";
import { Link } from "react-router-dom";

const SingleProduct = () => {
    const { product_id } = useParams();
    const { data, isLoading, isError } = useFetchSingleProductQuery(product_id);

    if (isLoading) return (
        <section>
            <h2>Loading...</h2>
        </section>
    );
    if (isError) return (
        <section>
            <h2>Error loading product</h2>
        </section>
    );

    return (
        <section className="single-product-card">
            <img src={data.img_url} alt={data.name} />
            <h2>{data.name}</h2>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <Link to={`/products/${data.id}/edit`}>Edit</Link>
            <button onClick={() => handleDelete(data.id)}>Delete</button>
        </section>
    )
};

export default SingleProduct;