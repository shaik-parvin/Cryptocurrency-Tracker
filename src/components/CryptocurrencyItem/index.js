// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoCurrenciesData} = props

  return (
    <li className="item-container">
      <div className="logo-container">
        <img
          src={cryptoCurrenciesData.currencyLogo}
          alt={cryptoCurrenciesData.currencyName}
          className="logo"
        />
        <p className="currency-name">{cryptoCurrenciesData.currencyName}</p>
      </div>
      <div className="values-container">
        <p className="currency-value">{cryptoCurrenciesData.usdValue}</p>
        <p className="currency-value">{cryptoCurrenciesData.euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
