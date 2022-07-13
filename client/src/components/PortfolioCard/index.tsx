
import './styles.css'
import CardWithImage from '../CardWithImage'
import PortfolioCardHeaer from '../PortfolioCardHeaer'
import PortfolioBody from '../PortfolioBody'


const PortfolioCard = () => {
    return (
        <CardWithImage className='portfolio-card'>
            <PortfolioCardHeaer />
            <PortfolioBody />
        </CardWithImage>
    )
}

export default PortfolioCard