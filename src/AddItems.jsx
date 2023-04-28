import React from "react";
import { BsPlusCircle } from "react-icons/bs";

const AddItems = ({ newItems, setNewItem, handleSubmit }) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        title="Input The T0-Do's"
        autoFocus
        type="text"
        id="addItem"
        placeholder="Add Item Now!"
        required
        value={newItems}
        onChange={(event) => setNewItem(event.target.value)}
      />
      <button type="submit" aria-label="Add Item" title="Add Item">
        {" "}
        <BsPlusCircle />{" "}
      </button>
    </form>
  );
};

export default AddItems;
