// HOOKS
import { useState, useEffect } from 'react'

// COMPONENTS
import { Login } from './components/Login'
import { Content } from './components/Content'

// STYLES
import './styles/General.css'
import './styles/Container.css'
import './styles/Responsive/Container.css'

export function App () {
  
  const [isLogin, setItLogin] = useState(false)

  useEffect(() => {
    localStorage.getItem('userName') ? setItLogin(!isLogin) : false
  },[])

  const updateStateIsLogin = () => {
    setItLogin(!isLogin)
  }

  return(
    <main className='Container'>
      {
        isLogin 
        ? <Content />
        : <Login updateStateIsLogin={updateStateIsLogin}/>
      }
    </main>
  )
}