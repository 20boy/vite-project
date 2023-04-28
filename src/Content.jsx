import ItemList from "./ItemList";
const Content = ({ items, handleCheck, handleDelete, FaTrashAlt }) => {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
          FaTrashAlt={FaTrashAlt}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>NO MORE TODOS </p>
      )}
    </main>
  );
};

export default Content;
