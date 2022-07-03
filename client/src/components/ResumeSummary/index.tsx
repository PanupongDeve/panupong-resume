import './styles.css'
import CardSection from '../CardSection'


const  ResumeSummary = () => {
    return (
        <CardSection className="summary-section" title="About">
            <div className='resume-summary-content'>
                <p className="mb-5">
                        &nbsp;&nbsp;&nbsp;3 years Software Engineer, interesting  Software Development,  
                        UI/UX, Infrastructure Cloud management and keep learning about knowleage technology technical 
                        for help company make profit.
                </p>
                <div className='resume-summary-code'>
                    <pre>
                        {
                        `while(!dead) { 
    code();
};`    
                        }
                    </pre>
                </div>
            </div>
        </CardSection>
    )
}


export default ResumeSummary