import Navbar from './components/Navbar.js';
import CurrencyConverter from './components/CurrencyConverter.js';
import CurrencyRateHistory from './components/CurrencryRateHistory.js';

function App() {
  return (<div className='min-h-dvh'>
    <div className='absolute w-full h-7/10 bg-linear-to-r from-blue-600 to-blue-900 [border-bottom-left-radius:50%_20%] [border-bottom-right-radius:50%_20%] z-[-1]'>
    </div>
    <header>
      <Navbar />
    </header>
    <main className='flex flex-col justify-center mt-5 px-12 pb-5'>
      <p className='text-center text-xl md:text-4xl font-medium text-white'>
        {/* {54} {'USD'} to {'UZS'} - Convert {'US Dollars'} to {'Uzbekistani Sums'} */}
      </p>
      <span className='block text-center text-xl text-white'>
        CR Currency Converter
      </span>
      <CurrencyConverter />
      <CurrencyRateHistory/>
    </main>
    <footer className=' bg-linear-to-r from-blue-600 to-blue-900 mt-5  z-[-1] w-full p-3'>
      <span className='block text-center text-lg text-white'> &copy;All rights reserved</span>
    </footer>
  </div>
  )
}

export default App
