import React from 'react';

const Search = (props) => {
    const handleChange = e => {
		props.setSearch(e.target.value);
    };
    
    return (
        <div className="coin-search">
            <h1 className="coin-text">Search a Currency</h1>
            <form>
                <input 
                    type="text"
                    value={props.search}
                    placeholder="search a crypto..."
                    onChange={handleChange}
                    className='coin-input'
                />
            </form>
        </div>
    )
};

export default Search;