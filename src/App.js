import { useState } from "react";
import "./App.css";

import Nav from "./components/nav/nav.component";
import Search from "./components/search/search.component";
import searches from "./searchData";

function App() {
  const [recentSearches, setRecentSearches] = useState(searches);
  return (
    <div className="App">
      <Nav />
      <Search />
      <div className="recentSearchContainer">
        <div className="recentSearchContainer--header">
          <h3>Recent searches</h3>
          <button>Edit</button>
        </div>
        <div className="searchInfoContainer">
          {recentSearches.map((search) => {
            return (
              <div className="searchInfo">
                <div className="searchInfo--data">
                  <p>{search.search}</p>
                  <p>
                    <span className="positions">{search.newPositions}</span> new
                    positions
                  </p>
                </div>
                <span class="material-icons">chevron_right</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
