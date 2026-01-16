import './index.css'
import { useState } from 'react'

function ChildComponent(props) {
  return (
    <>
      <h1>Hello {props.name}</h1>
      <button onClick={() => props.setName("Juanky")}>Cambiar a Juanky</button>
      <br/>
      <button onClick={() => props.setName("Pablo")}>Cambiar a Pablo</button>
    </>
  )
}

function ParentComponent() {
  const [name, setName] = useState("Juanaco")
  return <ChildComponent name={name} setName = {setName}/>
}

function App() {
  return (
    <div>
      <ParentComponent />
    </div>
  )
}

export default App
