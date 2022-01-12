import React from 'react'

function Crypto({coin}) {
    const {name,image,id,current_price} = coin;
    return (
        <div className="coin crypto">
            <div className="title">
                <img src={image} alt={id} />
                <h3>{name}</h3>
            </div>
            <div className="amount">
                <h4>{Math.random().toFixed(3)}{coin.symbol}</h4>
                <p>{(current_price*Math.random()).toFixed(2)}USD</p>
            </div>
        </div>
    )
}

export default Crypto
