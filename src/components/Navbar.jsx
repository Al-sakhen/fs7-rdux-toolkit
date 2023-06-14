import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="navbar bg-dark navbar-expand-lg navbar-dark border rounded">
            <div className="container-fluid">
                <ul className="d-flex list-unstyled gap-4 mt-2">
                    <li>
                        <NavLink
                            className="text-decoration-none text-white"
                            to="/"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="text-decoration-none text-white"
                            to="/products"
                        >
                            Products
                        </NavLink>
                    </li>
                </ul>
                <h5 className="ms-auto fw-bolder">Redux toolkit 😎</h5>
            </div>
        </nav>
    );
};

export default Navbar;
