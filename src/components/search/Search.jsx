import React from "react";

function Search() {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search here"
        // onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;


