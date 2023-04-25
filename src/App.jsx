import { useState } from 'react'
import Homepage from './Pages/Homepage'
import Products from './Pages/Products'
import Capabilities from './Pages/Capabilities'
import Ads from './Pages/Ads'
import Academy from './Pages/Academy'
import Footer from './Pages/Footer'
import 'flowbite';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Homepage /> */}
     {/* <Products /> */}
     <Capabilities />
     {/* <Ads /> */}
     {/* <Academy /> */}
     {/* <Footer /> */}
    </>
  )
}

export default App
