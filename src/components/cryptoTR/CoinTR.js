import React, { useState } from 'react';
import Search from './Search';
import ListDisplay from './ListDisplay';

const CoinTR = () => {
    const [search, setSearch] = useState('');
    return (
        <div className="coin-app">
            <Search setSearch={setSearch} search={search} />
            <ListDisplay search={search}/>
        </div>
    );
};

export default CoinTR;