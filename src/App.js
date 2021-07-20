import "./App.css";

import Nav from "./components/nav/nav.component";
import Search from "./components/search/search.component";

function App() {
  return (
    <div className="App">
      <Nav />
      <Search />
      <div className="recentSearchContainer">
        <div className="recentSearchContainer--header">
          <h3>Recent searches</h3>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
