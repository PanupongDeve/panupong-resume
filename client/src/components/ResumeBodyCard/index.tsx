import './styles.css'
import ResumeSummary from '../ResumeSummary'
import WorkExperience from '../WorkExperience'
import SkillsAndTools from '../SkillsAndTools'
import Education from '../Education'
import Course from '../Course'
import Language from '../Language'
import Interests from '../Interests'

const ResumeBodyCard = () => {
    return (
        <div className='resume-body p-4'>
            <div className="row">
                <div className="col-8">
                    <ResumeSummary />
                    <WorkExperience />
                </div>
                <div className="col-4">
                    <SkillsAndTools />
                    <Education />
                    <Course />
                    <Language />
                    <Interests />
                </div>
            </div>
            
        </div>
    )
}

export default ResumeBodyCard