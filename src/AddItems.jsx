import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { useRef } from "react";

const AddItems = ({ newItems, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        title="Input The T0-Do's"
        autoFocus
        ref={inputRef}
        type="text"
        id="addItem"
        placeholder="Add Item Now!"
        required
        value={newItems}
        onChange={(event) => setNewItem(event.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}
        title="Add Item"
      >
        {" "}
        <BsPlusCircle />{" "}
      </button>
    </form>
  );
};

export default AddItems;
