
import './styles.css'
import ResumeCardHeader from '../ResumeCardHeader'
import ResumeBodyCard from '../ResumeBodyCard'


const ResumeCard = () => {
    return (
        <div id="resumeToPrint" className='resume-card text-center mx-auto shadow-lg text-start bg-white'>
            <ResumeCardHeader />
            <ResumeBodyCard />
        </div>
    )
}

export default ResumeCard