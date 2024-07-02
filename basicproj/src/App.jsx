import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './Components/Accordian/Accordian'
import RandomColour from './Components/RandomColour/RandomColour'
import Rating from './Components/Rating/Rating'
import ImageSlider from './Components/ImageSlider/ImageSlider'
import LodingPage from './Components/LoadingPage/LodingPage'
import NestedMenu from './Components/NestedMenuNav/NestedMenu'



import menus from "./Components/NestedMenuNav/data.js"
import Qrgenerator from './Components/QRGenerator/Qrgenerator.jsx'
import DarkLitetheme from './Components/DarkLight/DarkLitetheme.jsx'
import PopUpModel from './Components/DialougeBoxPopup/PopUpModel.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
        {/* <ImageSlider url={`https://picsum.photos/v2/list`} limit={'10'} page={"1"}/> */}
        <PopUpModel/>
    </>
  )
}

export default App
