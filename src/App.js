import { useState } from "react";
import "./App.css";
import List from "./List";
import Data from "./Data";

function App() {
  const [people, setPeople] = useState(Data);
  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} />
          <button onClick={() => setPeople([])} disabled={people.length === 0}>
            Clear All
          </button>
          <button
            onClick={() => setPeople(Data)}
            disabled={people.length !== 0}
          >
            Show Person
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
