import "./App.css";
import JSONDATA from ".MOCK_DATA.json";

function App() {
  return (
    <div className="App">
      {" "}
      <input type="text" placeholder="search..." />
      {JSONDATA.map((val, key) => {})}
    </div>
  );
}

export default App;
