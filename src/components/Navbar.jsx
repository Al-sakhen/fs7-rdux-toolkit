const Navbar = () => {
    return (
        <>
            <nav className="navbar bg-dark navbar-expand-lg navbar-dark border rounded">
                <div className="container-fluid">
                    <ul className="d-flex list-unstyled gap-4 mt-2">
                        <li><span className="fw-bold">Counter</span> : 0</li>
                    </ul>

                    <h5 className="ms-auto fw-bolder">Redux toolkit 😎</h5>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
