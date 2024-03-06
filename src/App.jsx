import React, { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");

  const [items, setItems] = useState([]);


  // add item function
  function addItem() {
    if (!newItem) {
      alert("Enter the item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }



  // delete item function
  function deleteItem(id) {

    const newArray = items.filter(item => item.id != id);
    setItems(newArray);

  }


  return (
    <div className="body" >
      {/* 1. Header  */}
      <h1 className="title"> Grocery List App</h1>



      {/* 2. Input(input and Button) */}
      <input
        className="inputField"
        type="text"
        placeholder="Add an item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)

        }
      />

      <button className="addButton" onClick={() => addItem()}>Add</button>



      {/* 3. List of unordered items */}
      <h3>Cart</h3>
      <ul className="todoList">
        {items.map((item) => {
          return <li key={item.id} className="todoItem">{item.value}
            <button className="deleteButton" onClick={() => deleteItem(item.id)}>❎</button>

          </li>;
        })}
      </ul>
    </div>
  );
}

export default App;
