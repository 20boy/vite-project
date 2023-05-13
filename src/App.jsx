import AddItems from "./AddItems";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import SearchItem from "./SearchItem";
import "./App.css";
import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shoppinglist")) || []
  );
  const [newItems, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const setAndSave = (newInput) => {
    setItems(newInput);
    localStorage.setItem("shoppinglist", JSON.stringify(newInput));
  };
  const addItems = (item) => {
    const id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItem = [...items, myNewItem];
    setAndSave(listItem);
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
    setNewItem("");
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
      <SearchItem search={search} setSearch={setSearch} />
      <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(search.toLowerCase())
        )}
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
