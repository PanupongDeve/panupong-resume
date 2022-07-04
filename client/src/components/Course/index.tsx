import './styles.css'
import CardSection from '../CardSection'
import Badge from '../Badge'

const Course = () => {
    return (
        <CardSection class="course-section" title="Course & Certificate">
            <div className='course-section-content'>
                <ul className="list-unstyled">
                    <li className="mb-4">
                        <div className='course font-weight-bold'>AWS Certified Solutions Architect – Associate</div>
                        <div className='course-org'>Amazon Web Services (AWS)</div>
                        <div className='course-time'>Issued Aug 2021 · Expires Aug 2024</div>
                        <a className='btn course-btn' target="_blank" href="https://www.credly.com/badges/6ec77c52-0d50-498a-8052-a6d70d4f5c01">
                            Show credential
                            <i className="fa-solid fa-up-right-from-square btn-icon"></i>
                        </a>
                    </li>
                    <li className="mb-4">
                        <div className='course font-weight-bold'>Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)</div>
                        <div className='course-org'>Udemy</div>
                        <div className='course-time'>Issued Jul 2022 · No Expiration Date</div>
                        <a className='btn course-btn' target="_blank" href="https://www.udemy.com/certificate/UC-fef543dd-da89-4b54-9e46-14798a6e2d14">
                            Show credential
                            <i className="fa-solid fa-up-right-from-square btn-icon"></i>
                        </a>
                    </li>
                    <li className="mb-4">
                        <div className='course font-weight-bold'>Full-Stack Web Development with React</div>
                        <div className='course-org'>Coursera</div>
                        <div className='course-time'>Issued Mar 2022 · No Expiration Date</div>
                        <a className='btn course-btn' target="_blank" href="https://www.coursera.org/account/accomplishments/specialization/certificate/BZ28TSUCLH9T">
                            Show credential
                            <i className="fa-solid fa-up-right-from-square btn-icon"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </CardSection>
    )
}

export default Course