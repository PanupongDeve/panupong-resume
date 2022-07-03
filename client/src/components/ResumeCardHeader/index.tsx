import './styles.css'
import Profile from '../../assets/images/profile.jpg'

const ResumeHeaderCard = () => {
    return (
        <header className="header-card">
                <div className="row">
                    <div className="col-block col-md-auto resume-picture-holder text-center text-md-start">
                        <img className='picture' src={Profile} alt="" />
                    </div>
                    <div className="col">
                        <div className='row p-4 justify-content-center justify-content-md-between'>
                            <div className='primary-info col-auto'>
                                <h1 className='name mt-0 mb-1 text-white text-uppercase text-uppercase'>Panupong Chamsomboon</h1>
                                <div className="role title mb-3">Full Stack Developer</div>
                                <ul className='list-unstyled'>
                                    <li className='contact-list mb-2'>
                                        <a href="#" className="text-link">panupong.dev.web@gmail.com</a>
                                    </li>
                                    <li className='contact-list mb-2'>
                                        <a href="#" className="text-link">+6689 473 5224</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='secondary-info col-auto mt-2'>
                                <ul className='list-unstyled social-list'>
                                    <li className='contact-list mb-2'>
                                        <i className="contact-list__icon fa-brands fa-linkedin"></i>
                                        <a target="_blank" href="https://www.linkedin.com/in/panupong-chamsomboon" className="text-link">
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li className='contact-list mb-2'>
                                        <i className="contact-list__icon fa-brands fa-github-square"></i>
                                        <a target="_blank" href="https://github.com/PanupongDeve" className="text-link">
                                             Github
                                        </a>
                                    </li>
                                    <li className='contact-list mb-2'>
                                        <i className="contact-list__icon fa-brands fa-dev"></i>
                                        <a target="_blank" href="https://dev.to/panupongdeve" className="text-link">
                                            Blog
                                        </a>
                                    </li>
                                    <li className='contact-list mb-2'>
                                        <i className="contact-list__icon fa-brands fa-facebook-square"></i>
                                        <a target="_blank" href="https://web.facebook.com/TaSFM4a1" className="text-link">
                                            Facebook
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    )
}

export default ResumeHeaderCard