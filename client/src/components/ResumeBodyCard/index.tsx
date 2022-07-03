import './styles.css'
import ResumeSummary from '../ResumeSummary'
import WorkExperience from '../WorkExperience'
const ResumeBodyCard = () => {
    return (
        <div className='resume-body p-4'>
            <div className="row">
                <div className="col-9">
                    <ResumeSummary />
                    <WorkExperience />
                </div>
                <div className="col-3"></div>
            </div>
            
        </div>
    )
}

export default ResumeBodyCard