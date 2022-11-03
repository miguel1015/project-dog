import { useState } from 'react'
import './App.css'
import Dog from './Componentes/Dogs/Dog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Dog/>
    </div>
  )
}

export default App
