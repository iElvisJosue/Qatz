import { ContentProgress } from './ContentProgress'
import { ContentInformationProfile } from './ContentInformationProfile'
import { ContentInformationMedals } from './ContentInformationMedals'

import '../styles/Content.css'
// import '../styles/Responsive/Content.css'

export function Content () {

    const userName = localStorage.getItem('userName')
    const userImage = localStorage.getItem('userImage')

    return(
        <section className="Container__Content">
            <aside className='Container__Content--Progress'>
                <ContentProgress />
            </aside>
            <div className="Container__Content--Game">
                <h1>Contenido principal</h1>
            </div>
            <article className='Container__Content--Information'>
                <ContentInformationProfile userName={userName} userImage={userImage}/>
                <ContentInformationMedals/>
            </article>
        </section>
    )
}