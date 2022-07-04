import './styles.css'

import CardSection from '../CardSection'


const SkillsAndTools = () => {
    return (
        <CardSection className="skill-section" title="Skills & Tools">
            <div className='skills-section-content'>
                <div className="skills-item">
                    <h4 className="skills-item-title">Frontend</h4>
                    <ul className="list-unstyled mb-4">
                        <li className='px-4'>
                            <div className="skills-name">React</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">Javascript / TypeScript</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">HTML / CSS</div>
                        </li>
                    </ul>
                    
                </div>
                <div className="skills-item">
                    <h4 className="skills-item-title">Backend</h4>
                    <ul className="list-unstyled mb-4">
                        <li className='px-4'>
                            <div className="skills-name">Nodejs</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">Authentication</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">Mysql</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">Firebase</div>
                        </li>
                    </ul>
                </div>
                <div className="skills-item">
                    <h4 className="skills-item-title">DevOps</h4>
                    <ul className="list-unstyled mb-4">
                        <li className='px-4'>
                            <div className="skills-name">Linux Command</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">CI/CD</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">Docker</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">Kubernetes</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">AWS</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">GCP</div>
                        </li>
                    </ul>
                </div>
                <div className="skills-item">
                    <h4 className="skills-item-title">Technical Fundamental</h4>
                    <ul className="list-unstyled mb-4">
                        <li className='px-4'>
                            <div className="skills-name">Clean Code</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">Design Pattern</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">12 factor Application</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">Cloude Networking Design</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">Cloude Design for Cost Optimize</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">Software High Availability</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">Software Reliability</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">Software Security</div>
                        </li>
                        <li className='px-4'>
                            <div className="skills-name">GitOps Process</div>
                        </li>
                    </ul>
                </div>
            </div>
        </CardSection>
    )
}

export default SkillsAndTools