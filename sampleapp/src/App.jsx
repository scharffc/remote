import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Tile from './components/Tile.jsx';
import Card from './components/Card.jsx';
import Counter2 from './components/Counter2.jsx';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  return (
    <>
      <Button variant="secondary">Primary</Button>
      <br></br>
      <Image src="holder.js/171x180" rounded />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>This is my first program</h2>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Tile>
        <Card name="CC1" idd="1">
        </Card>
        <Card name="CC2" idd="2">
        </Card>
      </Tile>
      <Counter2></Counter2>
    </>
  )
}

export default App
