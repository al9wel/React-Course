import { useState } from "react";
import "./App.css";
import MyCompoenet from "./MyCompoenet";
import { inputContext } from "./Context/InputContext";
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
        {/* مثلا هنا اريد ارسال معلومات الى الكمبوننت هاذا او حفيده */}
        {/* هاذا الكمبوننت وجميع الكمبوننت اللي تحته تقدر توصل للمعلومات اللي برسلها */}
        <inputContext.Provider value={{ inputValue: inputValue, setInputValue: handleInputChange }}>
          <MyCompoenet value1={inputValue} setValue1={handleInputChange} />
        </inputContext.Provider>
        <button onClick={handleClick}>submit</button>
      </header>
    </div>
  );
}
export default App;
