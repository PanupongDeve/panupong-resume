import './styles.css'

import CardSection from '../CardSection'

const Language = () => {
    return (
        <CardSection className="lang-section" title="Language">
            <div className='lang-section-content'>
                <ul className="list-unstyled">
                    <li className='mb2'>
                        <span className='resume-lang-name font-weight-bold'>Thai</span>
                        <small className='text-muted font-weight-normal'>(Native)</small>
                    </li>
                    <li className='mb2'>
                        <span className='resume-lang-name font-weight-bold'>English</span>
                        <small className='text-muted font-weight-normal'>(Limited working proficiency)</small>
                    </li>
                </ul>
            </div>
        </CardSection>
    )
}

export default Language