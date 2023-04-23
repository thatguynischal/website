import { useState } from 'react'
import Homepage from './Pages/Homepage'
import Products from './Pages/Products'
import Capabilities from './Pages/Capabilities'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Homepage />
     <Products /> */}
     <Capabilities />
    </>
  )
}

export default App
