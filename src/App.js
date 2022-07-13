import "./App.css";
import MOCKDATAJSON from "./MOCK_DATA.json";

function App() {
  return (
    <div className="App">
      <input type="text" placeholder="search..." />
      {MOCKDATAJSON.map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
