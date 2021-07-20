import "./recentSearches.css";

const RecentSearches = (props) => {
  return (
    <div className="recentSearchContainer">
      <div className="recentSearchContainer--header">
        <h3>Recent searches</h3>
        <button>Edit</button>
      </div>
      <div className="searchInfoContainer">
        {props.data.map((search) => {
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
  );
};

export default RecentSearches;
