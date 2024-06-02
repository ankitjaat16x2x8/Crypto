import { createContext, useEffect, useState } from "react";

export const coincontext = createContext();

const CoincontextProvider = (props)=>{

    const [allCoin, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({name:"usd" ,Symbol: "$"})

    const fethAllCoin = async ()=>{
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-MoZVWtLhwGHYgvgA8kTZXGZ3'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        fethAllCoin();
    },[currency])

    const contextValue = {
        allCoin, currency, setCurrency


    }
    return(
        <coincontext.Provider value={contextValue}>
            {props.children}
        </coincontext.Provider>
    )
}
export default CoincontextProvider;