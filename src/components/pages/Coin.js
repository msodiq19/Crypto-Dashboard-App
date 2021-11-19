import React, { useState, useEffect } from 'react'
import Chart from './Chart'

function Coin({coin}) {
    const [chartData, setChartData] = useState({})

    useEffect(()=>{
        setChartData({
            labels: [1,2,3,4,5],
            datasets: [
              {
                label: "Price in USD",
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
              }
            ]
          },[coin]);
    })

    return (
        <div className="coin">
           <div className="container">
           <div className="coin-header">
               <div className="title">
                <img src={coin.image} alt={coin.id} />
                <h3>{coin.name}</h3>
               </div>
               <h4>${coin.current_price}</h4>
           </div>
           <div className="coin-body">
            <Chart chartData={chartData} />
           </div>
           </div>
        </div>
    )
}

export default Coin
