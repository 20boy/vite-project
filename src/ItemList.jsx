import React from "react";
import LineItems from "../LineItems";

const ItemList = ({ items, handleCheck, handleDelete, FaTrashAlt }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <LineItems
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            FaTrashAlt={FaTrashAlt}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;
