import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../app/counter/counterSlice1"
import { incrementByAmount, reset } from "../app/counter/counterSlice2"

const Counter = () => {
    const counter1 = useSelector((state) => state.counter1.value)
    const counter2 = useSelector((state) => state.counter2.value)
    const dispatch = useDispatch()
    const handleIncremnt = () => dispatch(increment())
    const handleDecrement = () => dispatch(decrement())
    const handleReset = () => dispatch(reset())
    const handleIncremntByAmount = () => {
        dispatch(incrementByAmount(10))
    }
    return (
        <>
            <h1>{counter1}</h1>
            <button onClick={handleIncremnt}>Incremnt</button>
            <button onClick={handleDecrement}>Decrement</button>
            <h1>{counter2}</h1>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleIncremntByAmount}>Incremnt By Amount</button>
        </>
    )
}
export default Counter