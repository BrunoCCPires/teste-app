import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [greeting, setGreeting] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      setGreeting(`Hello, ${name}!`)
    }
  }

  return (
    <div className="app">
      <h1>Test Application</h1>
      
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="input"
        />
        <button type="submit" className="button">
          Greet
        </button>
      </form>

      {greeting && <p className="greeting">{greeting}</p>}
    </div>
  )
}

export default App