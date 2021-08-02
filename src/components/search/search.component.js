import "./search.css";

const Seach = () => {
  return (
    <div className="searchContainer">
      <div className="inputs">
        <input
          type="text"
          name="jobSearch"
          id="jobSearch"
          placeholder="Job title, keywords, or company"
        />
        <input
          type="text"
          name="citySearch"
          id="citySearch"
          placeholder='City, state, zip, or "remote"'
        />

        <button className="inputs--btn">Find Jobs</button>
      </div>
      <p className="employersLink">
        <span>Employers: post a job</span> - your next hire is here
      </p>
    </div>
  );
};

export default Seach;
