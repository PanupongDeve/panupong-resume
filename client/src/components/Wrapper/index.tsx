import { useEffect, useState  } from 'react'
import './styles.css'
import Navbar from '../Navbar'

const Wrapper = ({ children }: any) => {
    const [width, setWidth] = useState(window.innerWidth)

    const handleResize = () => {
        
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    if (width <= 1200) {
        return (
        <div className="layout notfound">
            <h1>Disply is not represent at less width 1200 px and not support mobile. Thank !</h1>
        </div>
        )
    }
    return (
        <div className="layout">
            <Navbar />
            <div className='resume-wrapper position-relative'>
                <div className="resume-wrapper-inner">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Wrapper