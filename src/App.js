import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const jsx = data.map((d) => {
    return <h1>{d}</h1>
  })
  const handleAddName = () => {
    setData([...data, name])
    localStorage.setItem("names", JSON.stringify(data))
  }
  // هنا سيتم استدعاء الداله مره واحده فقط
  useEffect(() => {
    const d = JSON.parse(localStorage.getItem("names"))
    setData(d)
  }, [])

  // هنا سيتم عمل انفنت لوب 
  // لذلك لانقوم ب استدعاء داله 
  // setState
  // الا داخل ايفينت او فنكشن او يوزيفيكت
  // const d = JSON.parse(localStorage.getItem("names"))
  // setData(d)
  return (
    <div className="App">
      <header className="App-header">
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="name" />
        <br />
        <button onClick={handleAddName} >add name</button>
        <div>
          {jsx}
        </div>
      </header>
    </div>
  );
}
export default App;
