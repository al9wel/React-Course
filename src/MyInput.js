import { useContext } from "react"
import { inputContext } from "./Context/InputContext"
export default function MyInput() {
    const { inputValue, setInputValue } = useContext(inputContext)
    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </>
    )
}