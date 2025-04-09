import "./App.css";
import { useState } from "react";
let key = 0;
function App() {
  const [inputValue, setInputValue] = useState("")
  const [items, setItems] = useState([])
  const handelInput = (e) => {
    setInputValue(e.target.value)
  }
  const handleAddButton = () => {
    if (inputValue !== "") {
      let newObj = {
        id: key,
        title: inputValue
      }
      ++key;
      setItems([...items, newObj])
      setInputValue("")
    }
  }
  const handelDelete = (id) => {
    const delItem = [...items]
    let i = 0;
    let index = 0;
    delItem.forEach((item) => {
      if (item.id === id) {
        index = i
      }
      i++;
    })
    delItem.splice(index, 1)
    setItems(delItem)
  }
  const handelUpdate = (id) => {
    if (inputValue !== "") {
      let updItem = [...items]
      let i = 0;
      let index = 0;
      updItem.forEach((item) => {
        if (item.id === id) {
          index = i;
        }
        i++;
      })
      updItem[index].title = inputValue;
      setItems(updItem);
      setInputValue("")
    }
  }
  let itemsList = items.map((item) => {
    return (
      <div key={item.id} className="card">
        <h2>{item.title}</h2>
        <div>
          <button onClick={() => { handelDelete(item.id) }}>DELETE</button>
          <button onClick={() => { handelUpdate(item.id) }}>UPDATE</button>
        </div>
      </div>
    )
  })
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div className="card" style={{ backgroundColor: "#b71c1c47" }}>
            <h3 style={{ margin: 0 }}>Add Task</h3>
            <input placeholder="Add Or Update" onChange={handelInput} value={inputValue} type="text" />
            <button onClick={handleAddButton}>ADD</button>
          </div>
          {itemsList}
        </div>
      </header>
    </div>
  );
}
export default App;
