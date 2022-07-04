
import './styles.css'


const ResumeCard = ({ className, children}: any) => {
    return (
        <div className={`${className} card-with-img text-center mx-auto shadow-lg text-start bg-white`}>
            {children}
        </div>
    )
}

export default ResumeCard