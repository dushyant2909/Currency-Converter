import React, { useId, useState, useEffect } from 'react'

function InputBox({
    label,
    amount = 0,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    className = "",
}) {

    const amountInputId = useId(); // Gives a unique value of id
    const [newAmount, setnewAmount] = useState(amount);
    const [selectedCurrency, setselectedCurrency] = useState(selectCurrency);

    useEffect(() => {
        // Update the state when props change
        setnewAmount(amount);
        setselectedCurrency(selectCurrency);
    }, [amount, selectCurrency]);

    const amountInputHandler = (amt) => {
        setnewAmount(amt);
        onAmountChange(Number(amt));
    };

    const currencySelectHandler = (curr) => {
        setselectedCurrency(curr);
        onCurrencyChange(curr);
    }

    return (
        <div className={`bg-white border border-black p-3 rounded-lg text-sm font-semibold flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/60 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5 px-0.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={newAmount}
                    onChange={(e) => amountInputHandler(e.target.value)}
                // onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}// Simply it first checks whether onAmountchnge exist 
                // if exist then call it to prevent crash
                // change from number to string
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/60 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-200 cursor-pointer outline-none"
                    value={selectedCurrency}
                    // onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    onChange={(e) => currencySelectHandler(e.target.value)}
                >

                    {currencyOptions.map((currency, index) => (
                        // Always pass key in loops for performance
                        <option key={index} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;