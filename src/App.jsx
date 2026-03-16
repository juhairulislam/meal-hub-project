
import { useState } from 'react'
import './App.css'

function App() {

  const [num, setNum] = useState(0);

  const changeNumber = () =>{

    setNum(num+1) ;
  }

  return (
    <>
    <h1>{num}</h1>
    <br />
    <button onClick={changeNumber}>Click for change num</button>
     
    </>
  )
}

export default App
