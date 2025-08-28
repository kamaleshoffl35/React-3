import './App.css'

import Color from './Color'
import StatusMessage from './StatusMessage'
import ButtonCom from './ButtonCom'
import Hover from './Hover'
import Greeting from './Greeting'

import Onclick from './Onclick'
import Usergreeting from './Usergreeting'
import Product from './Product'
import Discount from './Discount'
import Weather from './weather'
import Doubleclick from './Doubleclick'
import Mouse from './mouse'
import KeyDown from './KeyDown'




function App() {
  

  return (
    <>
      <Color/>
      <StatusMessage status={"success"}/>
      <StatusMessage status={"error"} />
      <StatusMessage status={"Info"} />
      <ButtonCom />
      <Hover />
      <Greeting name = "Kamalesh"/>
      <Onclick label= "click" />
      <Usergreeting isLoggedIn={true}/>
      <Product name={"Laptop"} instock={true} />
      <Product name={"Mobile Phone"} instock={false} />
      <Discount discount={55} />
      <Discount discount={-1} />
      <Weather temperature={20}/>
      <Weather temperature={45}/>
      <Weather temperature={7}/>
      <Doubleclick />
      <Mouse />
      <KeyDown />
      
    </>
  )
}

export default App
