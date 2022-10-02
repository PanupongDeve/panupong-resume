import './styles.css'


const CardHeaderWithImage = ({ img, children }: any) => {
    return (
        <header className="header-card">
                <div className="row">
                    <div className="col-block col-md-auto resume-picture-holder text-center text-md-start">
                        {/* <img className='picture picture-profile' src={img} alt="" /> */}
                    </div>
                    {
                        children
                    }
                </div>
            </header>
    )
}

export default CardHeaderWithImage