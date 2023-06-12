
import Navbar from './Navbar';
import { Outlet } from "react-router-dom";


const AppLayout = () => {
    return (
    <>
        <Navbar />
        <div className="container">
            <Outlet />
        </div>
    </>
    )
};

export default AppLayout;
