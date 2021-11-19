import React from 'react'
import Header from '../Header'
import SideNav from '../SideNav'
import Coin from './Coin'

function Dashboard({ coins }) {
    return (
        <div className="section">
            <SideNav />
            <div className="main">
                <Header name='Dashboard' />
                <div className="coins">
                    {coins.map( (coin) => {
                        if(coin.id==='bitcoin' || coin.id==='ethereum' || coin.id==='litecoin'){
                            return <Coin id={coin.id} coin={coin} />;
                        }
                    }
                    )}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
