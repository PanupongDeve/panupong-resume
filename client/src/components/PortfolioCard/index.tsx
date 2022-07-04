
import './styles.css'
import CardWithImage from '../CardWithImage'
import PortfolioCardHeaer from '../PortfolioCardHeaer'


const PortfolioCard = () => {
    return (
        <CardWithImage className='portfolio-card'>
            <PortfolioCardHeaer />
        </CardWithImage>
    )
}

export default PortfolioCard