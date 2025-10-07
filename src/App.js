import logo from "./logo.svg";
import "./App.css";
import { useReducer } from "react";
import { counterReducer } from "./reducers/counterReducer";
import { CounterContext } from "./context/CounterContext";
import Reset from "./components/Reset";
function App() {
  const [result, dispatch] = useReducer(counterReducer, 0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>{result}</h1>
        <button onClick={() => dispatch({ type: "increment" })}>increment</button>
        <button onClick={() => dispatch({ type: "decrment" })}>decrment</button>
        <button onClick={() => dispatch({ type: "add", payload: { number: 10 } })}>add</button>
        <CounterContext.Provider value={{ result, dispatch }}>
          <Reset />
        </CounterContext.Provider>
      </header>
    </div>
  );
}
export default App;
