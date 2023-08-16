// HOOKS
import { useState } from 'react'

// COMPONENTS
import { Login } from './components/Login'

// STYLES
import './styles/General.css'
import './styles/Container.css'
import './styles/Responsive/Container.css'

export function App () {
  
  const [isLogin, setItLogin] = useState(true)

  const updateStateIsLogin = () => {
    setItLogin(!isLogin)
  }

  return(
    <main className='Container'>
      {
        isLogin 
        ? <Login updateStateIsLogin={updateStateIsLogin}/>
        : <h1>No estoy en el login</h1>
      }
    </main>
  )
}