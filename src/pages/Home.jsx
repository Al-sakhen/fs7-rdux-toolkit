import { Fragment } from "react";
import { useState } from "react";
const Home = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => setCount(count + 1);
    const decrementHandler = () => setCount(count - 1);
    const resetHandler = () => setCount(0);
    return (
        <Fragment>
            <div className="container mt-4">
                <div className="d-flex justify-content-center gap-4">
                    <button onClick={incrementHandler}>increment</button>
                    <button onClick={decrementHandler}>decrease</button>
                    <button onClick={resetHandler}>reset</button>
                </div>
                <h5 className="mt-5">
                    counter : <span>{count}</span>
                </h5>
            </div>
        </Fragment>
    );
};

export default Home;
