import { useState } from 'react'

import './App.css'
import { Heading } from '@chakra-ui/react'
import Allrouter from './Allroutes/Allrouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Allrouter/>
    </>
  )
}

export default App
