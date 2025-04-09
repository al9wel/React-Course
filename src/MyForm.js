import { useState } from "react"
export default function MyForm() {
    const [values, setValues] = useState({ name: "", email: "", info: "", one: false, country: "YE", gender: "" })
    const send = () => {
        console.log(values.name)
        console.log(values.email)
        console.log(values.info)
        console.log(values.one)
        console.log(values.country)
        console.log(values.gender)
    }
    return (
        <>
            <form onSubmit={(e) => { e.preventDefault() }}>
                {/* text input */}
                <input onChange=
                    {(e) => {
                        const values1 = { ...values };
                        values1.name = e.target.value
                        setValues(values1)
                    }}
                    type="text" placeholder="Name" value={values.name} />
                <br />
                {/* text input */}
                {/* email input */}
                <input onChange=
                    {(e) => {
                        setValues({ ...values, email: e.target.value })
                    }}
                    type="email" placeholder="Email" value={values.email} />
                <br />
                {/* email input */}
                {/* text area */}
                <textarea onChange=
                    {(e) => {
                        setValues({ ...values, info: e.target.value })
                    }}
                    value={values.info}
                />
                <br />
                {/* text area */}
                {/* checkbox */}
                <label>one</label>
                <input onChange=
                    {(e) => {
                        setValues({ ...values, one: e.target.checked })
                    }} checked={values.one} type="checkbox" />
                <br />
                {/* checkbox */}
                {/* select */}
                <select onChange=
                    {(e) => {
                        setValues({ ...values, country: e.target.value })
                    }}
                    value={values.country}>
                    <option>YE</option>
                    <option>SA</option>
                    <option>US</option>
                </select>
                <br />
                {/* select */}
                {/* radio */}
                <input value={"male"} onChange=
                    {(e) => {
                        setValues({ ...values, gender: e.target.value })
                    }}
                    type="radio" checked={values.gender === "male"} name="status" />male
                <input value={"female"} onChange=
                    {(e) => {
                        setValues({ ...values, gender: e.target.value })
                    }} type="radio" checked={values.gender === "female"} name="status" />female
                {/* radio */}
                <br />
                <br />
                <button onClick={send}>click</button>
            </form>
        </>
    )
}