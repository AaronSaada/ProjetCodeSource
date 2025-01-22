import { useState } from 'react'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'
import './Home.css'

export const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header title="Hello"/>
      <div className="card">
        <button onClick={() => setCount((count) => count > 0 ? count -1 : count)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
  )
}

