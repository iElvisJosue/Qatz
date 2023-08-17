import { ContentProgressLevel } from './ContentProgressLevel'

import "../styles/ContentProgress.css"
// import "../styles/Responsive/ContentInformationLevels.css"

export function ContentProgress(){

    const progressLevelBeginner = localStorage.getItem('userLevelProgressBeginner')
    const progressLevelFeline = localStorage.getItem('userLevelProgressFeline')
    const progressLevelKitty = localStorage.getItem('userLevelProgressKitty')
    const progressLevelRaces = localStorage.getItem('userLevelProgressRaces')
    const progressLevelCuriosities = localStorage.getItem('userLevelProgressCuriosities')
    const progressLevelHealth = localStorage.getItem('userLevelProgressHealth')
    const progressLevelMyths = localStorage.getItem('userLevelProgressMyths')
    const progressLevelMaster = localStorage.getItem('userLevelProgressMaster')

    return(
        <div className="Container__Content--Progress--Details">
            <p className="Container__Content--Progress--Details--Title">
                Progreso actual
            </p>
            <ContentProgressLevel level={0} levelProgress={progressLevelBeginner} />
            <ContentProgressLevel level={1} levelProgress={progressLevelFeline} />
            <ContentProgressLevel level={2} levelProgress={progressLevelKitty} />
            <ContentProgressLevel level={3} levelProgress={progressLevelRaces} />
            <ContentProgressLevel level={4} levelProgress={progressLevelCuriosities} />
            <ContentProgressLevel level={5} levelProgress={progressLevelHealth} />
            <ContentProgressLevel level={6} levelProgress={progressLevelMyths} />
            <ContentProgressLevel level={7} levelProgress={progressLevelMaster} />
        </div>
    )
}