import AddItems from "./AddItems";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./App.css";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One bag of cocoa crunchies",
    },
    {
      id: 2,
      checked: true,
      item: "One spoon of milk bricks",
    },
    {
      id: 3,
      checked: false,
      item: "Two buckets of fruit juice",
    },
  ]);
  const [newItems, setNewItem] = useState("");
  const setAndSave = (newInput) => {
    setItems(newInput);
    localStorage.setItem("shoppinglist", JSON.stringify(newInput));
  };
  const addItems = (item) => {
    // const id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    // const myNewItem = { id, checked: false, item };
    // const listItem = [...items, myNewItem];
    // setAndSave(listItem);
    console.log(item);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSave(listItems);
  };
  const handleDelete = (id) => {
    const listItem = items.filter((item) => item.id !== id);
    setAndSave(listItem);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItems) return;
    addItems(newItems);
    setItems(" ");
    console.log(`Done`);
  };

  return (
    <div className="App">
      <Header title="Groceries List Today" />
      <AddItems
        newItems={newItems}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        FaTrashAlt={FaTrashAlt}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
