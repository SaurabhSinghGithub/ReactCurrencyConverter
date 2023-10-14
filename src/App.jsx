// import { useState } from 'react'
// import './App.css'
// import { InputBox } from './components'
// import useCurrencyInfo from './hooks/useCurrencyInfo'

// function App() {
//   const [amount, setAmount] = useState(0)
//   const [from, setFrom] = useState("usd")
//   const [to, setTo] = useState("inr")
//   const [convertedAmount, setConvertedAmount] = useState(0)

//   const currencyInfo = useCurrencyInfo(from)

//   const options = Object.keys(currencyInfo)

//   const swap = () => {
//     setFrom(to)
//     setTo(from)
//     setConvertedAmount(amount)
//     setAmount(convertedAmount)
//   }

//   const convert = () => {
//     setConvertedAmount(amount * currencyInfo[to])
//   }

//   return (
//     <div
//       className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
//       style={{
//         backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
//       }}
//     >
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               convert()

//             }}
//           >
//             <div className="w-full mb-1">
//               <InputBox
//                 label="From"
//                 amount={amount}
//                 currencyOptions={options}
//                 onCurrencyChange={(currency) => {
//                   setFrom(currency)
//                 }}
//                 selectCurrency={from}
//                 onAmountChange={(amount) => setAmount(amount)}
//               />
//             </div>
//             <div className="relative w-full h-0.5">
//               <button
//                 type="button"
//                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                 onClick={swap}
//               >
//                 swap
//               </button>
//             </div>
//             <div className="w-full mt-1 mb-4">
//               <InputBox
//                 label="To"
//                 amount={convertedAmount}
//                 currencyOptions={options}
//                 onCurrencyChange={(currency) => {
//                   setTo(currency)
//                 }}
//                 selectCurrency={to}
//                 amountDisable
//               />
//             </div>
//             <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
//               Convert {from.toUpperCase()} to {to.toUpperCase()}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default App

import { useState } from 'react';
import './App.css';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 bg-opacity-80 bg-white backdrop-filter backdrop-blur-md text-gray-700">
          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className="w-full mb-4">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setFrom(currency);
                }}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-2">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full py-2 px-6 transform hover:rotate-90 transition-transform"
                onClick={swap}
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-4 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 rounded-lg hover:bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 transition-colors">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

