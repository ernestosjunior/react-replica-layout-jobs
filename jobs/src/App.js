import "./App.css";
import { useState } from "react";

import Card from "./components/Card.js";

import data from "./data.json";

function App() {
  const [vagas, setVagas] = useState(data);

  return (
    <div className="App">
      <header></header>
      <div className="main-container">
        {vagas.map((v) => (
          <Card
            key={v.id}
            logo={v.logo}
            company={v.company}
            new={v.new}
            featured={v.featured}
            position={v.position}
            postedAt={v.postedAt}
            contract={v.contract}
            location={v.location}
            role={v.role}
            level={v.level}
            languages={v.languages}
            tools={v.tools}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
