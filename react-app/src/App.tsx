import ListGroup from "./ListGroup";

function App() {
  let items = ["Pakistan", "China", "Russia", "New Zealand", "Austria"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Countries"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
