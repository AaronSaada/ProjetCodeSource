import { useState } from 'react'
import { Header } from '../../components/Header/Header'
import { Footer } from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
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
        <Link to="/test">
          Cliquer ici
        </Link>
      </div>
      <Footer />
    </>
  )
}

