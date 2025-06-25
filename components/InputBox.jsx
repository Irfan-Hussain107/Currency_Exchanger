import React, { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = ""
}) {
  const amountId = useId()

  return (
    <div className={`bg-white p-4 rounded-xl shadow-md flex justify-between items-end gap-4 ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountId} className="block text-sm text-gray-600 mb-1">
          {label}
        </label>
        <input
          id={amountId}
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value ===""? "":Number(e.target.value))}
          className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70"
        />
      </div>

      <div className="w-1/2 text-right">
        <label className="block text-sm text-gray-600 mb-1">
          Currency
        </label>
        <select
          className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox;
