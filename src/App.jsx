import { useState } from 'react'
import Homepage from './Pages/Homepage'
import Products from './Pages/Products'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Homepage />
     <Products />
    </>
  )
}

export default App
