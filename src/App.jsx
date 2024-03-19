import { LineChart } from 'recharts'
import './App.css'
import Navbar from './Components/Navabr/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App
