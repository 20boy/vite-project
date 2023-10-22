import AddItems from "./AddItems";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import SearchItem from "./SearchItem";
import "./index.css";
import { useState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

function App() {
  const API_URL = "  http://localhost:5170/items";
  const [items, setItems] = useState([]);
  const [newItems, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [loader, setLoader] = useState("Loading");
  const addItems = (item) => {
    const id = items.length > 0 ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItem = [...items, myNewItem];
    setItems(listItem);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("DID NOT RECIEVE YOUR TODOS");
        const listItem = await response.json();
        setItems(listItem);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setLoader(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, []);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };
  const handleDelete = (id) => {
    const listItem = items.filter((item) => item.id !== id);
    setItems(listItem);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItems) return;
    addItems(newItems);
    setNewItem("");
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
      <main>
        {loader && <p className="loader"> </p>}
        {fetchError && <p className="error">{`Error: ${fetchError}`}</p>}
        {!fetchError && !loader && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            setItems={setItems}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            FaTrashAlt={FaTrashAlt}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
