
import './App.css';

import Nav from './components/nav/nav.component'

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="searchContainer">
        <div className="inputs">
          <input type="text" name="jobSearch" id="" />
          <input type="text" name="citySearch" id="" />
          <button>Find Jobs</button>
        </div>
      </div>
    </div>
  );
}

export default App;
