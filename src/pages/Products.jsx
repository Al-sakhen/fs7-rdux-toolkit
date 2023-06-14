import axios from "axios";
import { useEffect, useState } from "react";
import SingelProduct from "../components/products/SingelProduct";
import { useGetProductsQuery } from "../redux/services/dummyJsonApi";

const Products = () => {
    const { data, isSuccess } = useGetProductsQuery();
    return (
        <>
            {isSuccess ? (
                <div className="row mt-3">
                    {data.products.map((product) => (
                        <SingelProduct key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
};

export default Products;
