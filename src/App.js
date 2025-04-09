
import MyForm from "./MyForm";
import "./App.css";
import MyButton from "./MyButton";
import MyInput from "./MyInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton />
        <MyInput />
        <MyForm />
      </header>
    </div>
  );
}
export default App;
