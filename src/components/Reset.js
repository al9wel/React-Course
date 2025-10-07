import { CounterContext } from "../context/CounterContext"
import { useContext } from "react"
const Reset = () => {
    const { result, dispatch } = useContext(CounterContext)
    return (
        <>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        </>
    )
}
export default Reset