import { useState } from 'react'
import InputBox from '../components/InputBox'
import useCurrencyInfo from '../hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * (1 / currencyInfo[to]))
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center px-4"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg')`
      }}>
      <div className="w-full max-w-md p-6 rounded-xl backdrop-blur-lg bg-white/30 shadow-lg">
        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}>
          <InputBox
            label="From"
            amount={amount}
            onAmountChange={(amount) => setAmount(amount)}
            onCurrencyChange={(currency) => setFrom(currency)}
            currencyOptions={options}
            selectCurrency={from}
            className="mb-6"
          />

          <div className="flex justify-center mb-6">
            <button
              type="button"
              className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            onCurrencyChange={(currency) => setTo(currency)}
            currencyOptions={options}
            selectCurrency={to}
            amountDisable
            className="mb-6"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
