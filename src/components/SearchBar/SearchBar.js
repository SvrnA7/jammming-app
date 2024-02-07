// SearchBar.js
import React, {useState, useCallback} from 'react';

import './SearchBar.module.css';

const SearchBar = (props) => {
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((event) => {
      setTerm(event.target.value);
    },[]);

    const search = useCallback(() => {
    props.onSearch(term);
}, [props.onSearch, term]);

  return (
    <div className= "SearchBar">
      <input type="text" placeholder="Enter track or artist" onChange={handleTermChange} />
      <button className='SearchButton' onClick={search}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;