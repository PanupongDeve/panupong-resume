import './styles.css'

import CardSection from '../CardSection'

const Interests = () => {
    return (
        <CardSection class="interests-section" title="Interests">
            <div className='interests-section-content'>
                <ul className="list-unstyled">
                    <li className="mb-1">Web Engineer</li>
                    <li className="mb-1">Cloud Managment</li>
                    <li className="mb-1">Machine Learning</li>
                    <li className="mb-1">Decentralized Finance</li>
                </ul>
            </div>
        </CardSection>
    )
}

export default Interests