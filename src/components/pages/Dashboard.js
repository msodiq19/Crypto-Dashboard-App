import React from 'react'
import Header from '../Header'
import SideNav from '../SideNav'
import Coin from './Coin'
import Crypto from './Crypto'
import Chart from './Chart'

function Dashboard({ coins }) {
    return (
        <div className="main-section">
            <SideNav />
            <div className="main">
                <Header name='Dashboard' />
                <div className="coins">
                    {coins.map(coin => 
                        coin.id==='bitcoin' || coin.id==='ethereum' || coin.id==='litecoin' ?
                        <Coin keys={coin.id} coin={coin} /> : null
                    )}
                </div>
                <div className="main-dashboard">
                <div className="portfolio">
                    <h2>Your Portfolio</h2>
                    <div className="balance">
                        <h2>$232,758</h2>
                    </div>
                    <div className="cryptos">
                        {coins.map(coin=>
                            coin.id==='bitcoin' || coin.id==='ethereum' || coin.id==='litecoin' ?
                            <Crypto keys={coin.id} coin={coin} /> : null
                            )}
                    </div>
                </div>
                <div className="overall">
                    <Chart  />
                </div>
                <div className="history">
                    <h2>Recent History</h2>
                    <div className="transactions">
                        <div className="transaction">
                            <div className="details">
                                <h3>Recieved</h3>
                                <p>May 10, 2020</p>
                            </div>
                            <p className="success">$1200</p>
                        </div>
                        <div className="transaction">
                            <div className="details">
                                <h3>Recieved</h3>
                                <p>Sep 08, 2020</p>
                            </div>
                            <p className="failure">$600</p>
                        </div>
                        <div className="transaction">
                            <div className="details">
                                <h3>Sent</h3>
                                <p>Dec 15, 2020</p>
                            </div>
                            <p className="failure">$320</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
