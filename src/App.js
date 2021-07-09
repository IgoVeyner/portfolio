import './sass/app.scss'
import Home from './components/Home'
import { useSelector } from 'react-redux'

function App() {
  const theme = useSelector(state => state.theme)

  return (
    <main className={theme} >  
      <Home />
    </main>
  )
}

export default App
