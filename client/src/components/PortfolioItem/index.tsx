import './style.css'


interface PortfolioItemProps {
    time: string,
    title: string,
    title_link: string,
    detail: string,
    source_link: string
}

const PortfolioItem = (props: PortfolioItemProps) => {
    const {
        time,
        title,
        title_link,
        detail,
        source_link
    } = props;

    return (
        <div className='port-card'>
            <div className='card-body-container'>
                <time>{time}</time>
                <a className='card-title --underline' target='_blank' href={title_link}><h1>{title}</h1></a>
                <p>{detail}</p>
            </div>
            <div className='card-footer'>
                <a className='card-link flex-row' target='_blank' href={source_link}>
                    <span className='card-link-title'>Source</span> 
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        </div>
    )
}


export default PortfolioItem