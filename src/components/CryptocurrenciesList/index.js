// Write your JS code here
import {Component} from 'react'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoCurrenciesData} = this.props

    return (
      <div className="crypto-card">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="img"
        />
        <div className="crypto-list">
          <div className="list-header">
            <p className="para">Coin Type</p>
            <div className="list-sub-head">
              <p className="para">USD</p>
              <p className="para">EURO</p>
            </div>
          </div>
          <ul className="list-body">
            {cryptoCurrenciesData.map(each => (
              <CryptocurrencyItem key={each.id} cryptoCurrenciesData={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
