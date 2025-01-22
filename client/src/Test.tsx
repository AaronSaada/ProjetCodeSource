import { Page } from './Page/Page'
import './Home.css'

export const Test = () => {
  return (
    <Page title='Hello'>
      <div className='card'>
        <h1>Hello World</h1>
        <button>Without bootstrap</button>
      </div>
    </Page>
  )
}
