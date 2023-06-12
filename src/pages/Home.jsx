import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "../redux/features/counter/counterSlice";
import { toggleTheme } from "../redux/features/theme/themeSlice";
const Home = () => {

    const dispatch = useDispatch();
    // ================== States ==================
    const {count , maxNum , minNum} = useSelector( ({counter}) => counter);
    const { mode } = useSelector( ({theme}) => theme);


    // ================== Handlers ==================
    // ****** counter handlers
    const incrementHandler = () => { dispatch(increment()) };
    const incrementByAmountHandler = () => { dispatch(incrementByAmount(20)) };
    const decrementHandler = () => { dispatch(decrement()) };
    const resetHandler = () => { dispatch(reset()) };
    // ****** theme handlers
    const toggleThemeHandler = () => { dispatch(toggleTheme()) };
    //  ============= End of Handlers ===============
    // *********************************************

    return (
        <>
            <div className="container mt-4">
                <div className="d-flex justify-content-center gap-4">
                    <button onClick={incrementHandler}>increment</button>
                    <button onClick={incrementByAmountHandler}>increment with payload</button>
                    <button onClick={decrementHandler}>decrement</button>
                    <button onClick={resetHandler}>reset</button>
                </div>
                <h5 className="mt-5">
                    counter : <span>{count}</span>
                </h5>
            </div>
            <hr />
            <hr />
            <hr />
            <div className="container">
            <button onClick={toggleThemeHandler}>Toggle Theme</button>
                <h5 className="my-3">
                    {mode}
                </h5>
            </div>
        </>
    );
};

export default Home;
