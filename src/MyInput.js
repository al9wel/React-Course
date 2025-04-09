import { useState } from "react"

export default function MyInput() {
    const [value, setValue] = useState("")
    const change = (e) => {
        setValue(e.target.value)
    }
    const [name, setName] = useState("click")
    const send = () => {
        setName(value)
    }
    return (
        <>
            <input onChange={change} type="text" value={value} />
            <button onClick={send}>{name}</button>
        </>
    )
}