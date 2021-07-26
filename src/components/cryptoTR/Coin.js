import React from 'react';

const Coin = (props) => {
    const { coin } = props;

    return (
        <div className='coin-container'>
            <div className="coin-row">
                <div className='coin-info'>
                    <img src={coin.image} alt='crypto' />
                    <h1 className='coin-name'>{coin.name}</h1>
                    <p className='coin-symbol'>{coin.symbol}</p>
                </div>
                <div className='coin-data'>
                    <p className="coin-price">${coin.current_price}</p>
                    <p className="coin-volume">${coin.market_cap.toLocaleString()}</p>
                    {coin.price_change_percentage_24h < 0 ? (
                        <p className='coin-percent red'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    ) : (
                        <p className='coin-percent green'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
                    )}

                    <p className='coin-marketcap'>
                        Mkt Cap: ${coin.total_volume.toLocaleString()}
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Coin;