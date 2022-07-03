import './styles.css'

import CardSection from '../CardSection'

const Education = () => {
    return (
        <CardSection className="education-section" title="Education">
             <div className='education-section-content'>
                <ul className="list-unstyled">
                    <li className="mb2">
                        <div className='resume-degree font-weight-bold'>Bsc in Computer Engineering</div>
                        <div className='resume-degree-org'>Prince of Songkla University</div>
                        <div className='resume-degree-time'>2013 - 2018</div>
                    </li>
                </ul>
            </div>
        </CardSection>
    )
}

export default Education