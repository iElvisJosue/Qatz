import { useState } from 'react'
import { LoginContent } from './LoginContent'
import { LoginModal } from './LoginModal'

import '../styles/LoginContent.css'
import '../styles/LoginModal.css'
import '../styles/Responsive/Login.css'

export function Login({ updateStateIsLogin }){

    const [seeHelpModal, setHelpModal] = useState(false)

    const iconModal = seeHelpModal ? 'remove-circle-outline' : 'help-circle-outline'

    return(
        <section className="Container__Login">
            <button className="Container__Login--Help" onClick={() => setHelpModal(!seeHelpModal)}>
                <ion-icon name={iconModal}></ion-icon>
            </button>
            <LoginContent updateStateIsLogin={updateStateIsLogin}/>
            <LoginModal seeHelpModal={seeHelpModal}/>
        </section>
    )
}