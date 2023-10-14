import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    const [data, setData] = useState({})

    useEffect(() => {

        (async function getData() {

            try {
                const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

                const res = await response.json();

                setData(res[currency]);
            } catch (error) {
                console.log(error)
            }

        })()

    }, [currency])

    return data;

}

export default useCurrencyInfo;



// import {useEffect, useState} from "react"


// function useCurrencyInfo(currency){
//     const [data, setData] = useState({})
//     useEffect(() => {
//         fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
//         .then((res) => res.json())
//         .then((res) => setData(res[currency]))
//         console.log(data);
//     }, [currency])
//     console.log(data);
//     return data
// }

// export default useCurrencyInfo;
