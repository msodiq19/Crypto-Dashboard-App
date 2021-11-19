import './App.css';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Dashboard from './components/pages/Dashboard'
import Wallet from './components/pages/Wallet'

function App() {
  const [coins, getCoins] = useState([])
  //const coinlayer_api = '13864c974effe668f72bd5862e81eb78';
  //const coinlayer_url = `http://api.coinlayer.com/api/live?access_key=${coinlayer_api}&symbols=BTC,ETH,LTC,XRP,USDT`;
  const api_url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h";

  useEffect(()=>{
    const livePrices = async () => {
      await fetch(api_url).then(res=>res.json()).then(data=>{
        getCoins(data)
        console.log(data)
      })
    }

    livePrices()
    
  },[api_url])

  

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route strict path="/"> <Dashboard coins={coins} /> </Route>
          <Route strict path="/wallet"> <Wallet /> </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
