import React from 'react'

function Coin({coin}) {
    const {price_change_percentage_24h} = coin;
    const percent = price_change_percentage_24h.toFixed(2);
    return (
        <div className="coin">
          <div className="coin-container">
            <div className="coin-header">
               <div className="title">
                <img src={coin.image} alt={coin.id} />
                <h3>{coin.name}(24h)</h3>
               </div>
               <h3 className="price">${coin.current_price}</h3>
            </div>
            <h4 className={percent>0?'profit':'loss'}>{percent>0? `+${percent}`:`${percent}`}</h4>
          </div>
        </div>
    )
}

export default Coin
