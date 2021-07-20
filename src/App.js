import { useState } from "react";
import "./App.css";

import Nav from "./components/nav/nav.component";
import Search from "./components/search/search.component";
import searches from "./searchData";
import RecentSearches from "./components/recentSearches/recentSearches.component";

function App() {
  const [previousSearches, setPreviousSearches] = useState(searches);
  return (
    <div className="App">
      <Nav />
      <Search />
      <RecentSearches data={previousSearches} />
      <div className="separator"></div>
      <footer>
        <div className="indeedStat">
          <p>
            Indeed helps people get jobs:{" "}
            <span>Over 16 million stories shared</span>
          </p>
        </div>
        <div className="siteMap">
          <ul>
            <li>Hiring Lab</li>
            <li>Career Advice</li>
            <li>Browse Jobs</li>
            <li>Browse Companies</li>
            <li>Salaries</li>
            <li>Find Certifications</li>
            <li>Indeed Events</li>
            <li>Work at Indeed</li>
            <li>Help Center</li>
            <li>About</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
