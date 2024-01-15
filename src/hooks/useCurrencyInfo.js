import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setdata] = useState({});
    
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((res) => setdata(res[currency]));
    }, [currency]);
    return data;
};

export default useCurrencyInfo;