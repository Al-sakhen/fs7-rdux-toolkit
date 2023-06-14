import { NavLink, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../redux/services/dummyJsonApi";

const Product = () => {
    const { id } = useParams();
    const {isSuccess , data} = useGetProductByIdQuery(id)

    return (
        <>
            {isSuccess ? (
                <div className="mt-3">
                    <NavLink
                        to={`/products`}
                        className="text-white text-decoration-none my-3 d-inline-block"
                    >
                        Back
                    </NavLink>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
};

export default Product;
