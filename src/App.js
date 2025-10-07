import logo from "./logo.svg";
import "./App.css";
import { useMemo, useState } from "react";
function App() {
  const [value, setValue] = useState("")
  const [number, setNumber] = useState(0)
  // هاذه العمليه سيتم حسابها في كل مره يتم عمل ريرندر
  const noUseMemo = number + 1
  // هاذي العمليه سيتم حسابها في اول ريرندر فقط
  const withUseMemo = useMemo(() => {
    return number + 1
  }, [])
  const handleChange = (e) => {
    setValue(e.target.value)
    setNumber(number + 1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <input value={value} onChange={handleChange} type="text" />
        <h1>{noUseMemo}</h1>
        <h1>{withUseMemo}</h1>
      </header>
    </div>
  );
}
export default App;
