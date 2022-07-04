
import './styles.css'
import CardWithImage from '../CardWithImage'
import ResumeCardHeader from '../ResumeCardHeader'
import ResumeBodyCard from '../ResumeBodyCard'


const ResumeCard = () => {
    return (
        <CardWithImage className='resume-card'>
            <ResumeCardHeader />
            <ResumeBodyCard />
        </CardWithImage>
    )
}

export default ResumeCard