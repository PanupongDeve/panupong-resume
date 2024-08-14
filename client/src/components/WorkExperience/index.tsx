import './styles.css'
import Badge from '../Badge'
import CardSection from '../CardSection'

const WorkExperience = () => {
    // test update
    return (
        <CardSection className="experience-section" title="Work Experience">
            <div className="experience-content">
                <div className="resume-timeline position-relative">
                    <article className="resume-timeline-item position-relative pb-5 mb-2">
                        <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row">
                                <h3 className="resume-position-title font-weight-bold mb-1">DevOps Engineer - Test</h3>
                                <div className="resume-company-name ms-auto">Primo World Co., Ltd</div>
                            </div>
                            <div className="resume-position-time">
                                Jan 2020 - May 2022
                            </div>
                        </div>
                        <div className="resume-timeline-item-desc">
                            <p>Setup CI/CD with Azure Pipeline allow Automate Build and Deployment for DEV, UAT and Production Environment for Primo Platform
                                <br />
                                <br />
                                Setup Security Pipeline for Vulnerability Scan Node Package Manger, OS, and API Response Headers with npm audit, open-scap, arachni-scanner
                                <br />
                                <br />
                                Use nodejs and aws-sdk Implement cronjob service auto launch migration instance and shutdown when migration success for cost optimize
                                <br />
                                <br />
                                Design Solution and implement AWS infrastructure and API Service(WAF53, ALB LoadBalancing, VPC, EC2, Auto Scaling) for High availability, Security and Reliability With Terraform
                                <br />
                                <br />
                                Design Solution and implement GKE and API Service(Google Kubernetes Engine) for High availability, Security and Reliability
                                <br />
                                 <br />
                                Design Hosting Single Page Application with S3 and Cloudfront
                                <br />
                                <br />
                                Design Solution AWS Architecture for cost optimize in Dev Environment
                                <br />
                                <br />
                                <b>Technologies used:</b><br />
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Badge title="AWS" /></li>
                                    <li className="list-inline-item"><Badge title="Azure Pipeline" /></li>
                                    <li className="list-inline-item"><Badge title="Linux Command" /></li>
                                    <li className="list-inline-item"><Badge title="Docker" /></li>
                                    <li className="list-inline-item"><Badge title="Kubernetes(GKE)" /></li>
                                    <li className="list-inline-item"><Badge title="Nodejs" /></li>
                                    <li className="list-inline-item"><Badge title="Python" /></li>
                                </ul>
                            </p>
                        </div>
                    </article>
                    
                    <article className="resume-timeline-item position-relative pb-5 mb-2">
                        <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row">
                                <h3 className="resume-position-title font-weight-bold mb-1">Web Developer</h3>
                                <div className="resume-company-name ms-auto">Sedna System</div>
                            </div>
                            <div className="resume-position-time">
                                Jul 2019 - Dec 2019
                            </div>
                        </div>
                        <div className="resume-timeline-item-desc">
                            
                            <p>
                                Use React.js and Javascript to implement CMS like Wordpress but about Search engine UI and plugin for website agency to connect api about Sedna yacht rent system.
                                <br />
                                <br />
                                - Backoffice for User disign search engine<br />
                                - Template search engine with configuration's user design for plugin website's agency
                                <br />
                                <br />
                                <b>Technologies used:</b><br />
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Badge title="React" /></li>
                                    <li className="list-inline-item"><Badge title="Redux" /></li>
                                    <li className="list-inline-item"><Badge title="HTML/CSS/Javascript" /></li>
                                </ul>
                            </p>
                        </div>
                    </article>

                    <article className="resume-timeline-item position-relative pb-5 mb-2">
                        <div className="resume-timeline-item-header mb-2">
                            <div className="d-flex flex-column flex-md-row">
                                <h3 className="resume-position-title font-weight-bold mb-1">Software Developer</h3>
                                <div className="resume-company-name ms-auto">YuuZoo Corporation</div>
                            </div>
                            <div className="resume-position-time">
                                Jul 2018 - Feb 2019
                            </div>
                        </div>
                        <div className="resume-timeline-item-desc">
                            
                            <p>
                                Use React.js Nodejs and Typscript to implement Sandbox Global's Product about Social Media <br />
                                for Sandbox Global' user for Share game about customer playing in SandBlox Global's platform.
                                
                                <br />
                                <br />
                                <b>Technologies used:</b><br />
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Badge title="React" /></li>
                                    <li className="list-inline-item"><Badge title="Redux" /></li>
                                    <li className="list-inline-item"><Badge title="Nodejs" /></li>
                                    <li className="list-inline-item"><Badge title="Typescript" /></li>
                                    <li className="list-inline-item"><Badge title="HTML/CSS/Javascript" /></li>
                                </ul>
                            </p>
                        </div>
                    </article>

                </div>
            </div>
        </CardSection>
    )
}


export default WorkExperience