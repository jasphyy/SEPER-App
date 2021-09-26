import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form action="/" method="get">
    <label htmlFor="header-search" class = "SELabel">
        <span className="visually-hidden">Search SE Practice</span>
    </label>
    <hr></hr>
    <div class = "searchbar-container">
    <input
        class = "searchbar"
        value={searchQuery}
        onInput={e => setSearchQuery(e.target.value)}
        type="text"
        id="header-search"
        placeholder="Search SE Practice"
        name="s" 
    />
    <button class = "search-button" type="submit">Search</button>
    </div>
</form>


);

export default SearchBar;