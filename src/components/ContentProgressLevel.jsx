import { levelDetails } from './Const'

import '../styles/ContentProgressLevels.css'

export function ContentProgressLevel({ level, levelProgress }){

    console.log(levelDetails[level].levelClass);
    const classNameLevel = `Container__Content--Progress--Details--Level ${levelDetails[level].levelClass}`


    const calculatePercentage = () => {
        const maxScore = levelDetails[level].levelQuestions
        const currentScore = levelProgress
        const totalProgress = (currentScore / maxScore) * 100
        return Math.round(totalProgress)
    }   

    return(
        <div className={classNameLevel}>
            <picture className="Container__Content--Progress--Details--Level--Box">
                <img src={levelDetails[level].levelImage} alt={levelDetails[level].levelAlt} />
            </picture>
            <div className="Container__Content--Progress--Details--Level--Details">
                <p className='Container__Content--Progress--Details--Level--Details--Text'>
                    {levelDetails[level].levelName} <span>{calculatePercentage()}%</span>
                </p>
                <progress className='Container__Content--Progress--Details--Level--Details--Progress' max={levelDetails[level].levelQuestions} value={levelProgress}></progress>
            </div>
        </div>  
    )
}