import './styles.css'


const Wrapper = ({ children }: any) => {
    return (
        <div className='resume-wrapper position-relative'>
            <div className="resume-wrapper-inner">
                {children}
            </div>
            
        </div>
    )
}

export default Wrapper