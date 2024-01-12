import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Chicago",
    "Houston",
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Button color="primary" onClick={() => console.log("Clicked")}>
        My Button
      </Button>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
