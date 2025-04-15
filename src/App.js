import { useState } from "react";
import "./App.css";
import MyCompoenet from "./MyCompoenet";

function App() {
  const [inputValue, setInputValue] = useState("")
  const handleInputChange = (v) => {
    setInputValue(v)
  }
  const handleClick = () => {
    console.log(inputValue)
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* يتم تمرير الداله التي تقوم بتعديل الستايت*/}
        {/* ويتم تمرير القيمه الحاليه للستايت */}
        {/* حيث اذا تم تغيير قيمه الانبوت يتم استدعاء الداله من هنا  */}
        {/* ولذلك تتغير قيمه الستايت من داخل الكمبوننت التابعه له وليس من خارجها */}
        <MyCompoenet value1={inputValue} setValue1={handleInputChange} />
        <button onClick={handleClick}>submit</button>
      </header>
    </div>
  );
}
export default App;
