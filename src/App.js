import { useState } from "react";
import "./App.css";

function App() {
  const [pending, setPending] = useState(0)
  const [done, setDone] = useState(0)
  const handleOrderClick = async () => {
    setPending(pending + 1)
    setTimeout(() => {
      setPending((p) => p - 1)
      setDone((d) => d + 1)
    }, 3000)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>pending ({pending})</h1>
        <h1>done ({done})</h1>
        <button onClick={handleOrderClick}>order</button>
      </header>
    </div>
  );
}
export default App;
