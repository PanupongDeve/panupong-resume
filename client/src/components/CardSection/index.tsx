import './styles.css'
import Topic from '../Topic'
const CardSection = ({ className, title , children }: any) => {
    return (
        <section className={`${className} px-5 mb-5 card-title-left`}>
            <Topic title={title} />
            {children}
        </section>
    )
}

export default CardSection