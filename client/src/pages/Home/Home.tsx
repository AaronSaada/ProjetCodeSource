import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Page } from '../../components/Page/Page'


export const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <Page title='Accueil'>
      <div className="card">
        <button onClick={() => setCount((count) => count > 0 ? count -1 : count)}>
          count is {count}
        </button>
        <Link to="/test">
          Cliquer ici
        </Link>
      </div>
    </Page>
  )
}

