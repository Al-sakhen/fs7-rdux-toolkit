/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { useUpdateProductMutation } from "../../redux/services/dummyJsonApi";

const SingelProduct = ({ product }) => {
    const [updateProduct, { isSuccess, data, isError, error }] =
        useUpdateProductMutation();
    return (
        <div className="col-md-6 col-lg-4 mb-3">
            <div className="border rounded-4 p-2 text-center">
                <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() =>
                        updateProduct({
                            id: product.id,
                            body: { title: "updated title" ,brand: 'Ahmad' },
                        })
                    }
                >
                    edit
                </button>
                <NavLink to={`/products/${product.id}`} className="text-white">
                    <h4>{product.title}</h4>
                </NavLink>
                <p className="badge bg-secondary">{product.category}</p>
            </div>
        </div>
    );
};

export default SingelProduct;
