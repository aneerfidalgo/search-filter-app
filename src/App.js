import "./App.css";
import MOCKDATAJSON from "./MOCK_DATA.json";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
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
