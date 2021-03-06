import './styles.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="top-menu-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="menu-fullwidth">
                            <div className="logo-wrapper">
                                <div className="logo logo-top">
                                    <a href="#">
                                        <h1 className='logo-title'>PanupongDeve</h1>
                                    </a>
                                </div>
                            </div>
                            <div className="menu-container">
                                <div className="d_menu">
                                    <div className='navbar navbar-expand-lg mainmenu__menu'>
                                        <div className='navbar-collapse collapse' id="bs-example-navbar-collapse-1">
                                            <ul className="navbar-nav">
                                                <li role="button" >
                                                    <Link to="/"><b className='menu-list'> Resume</b></Link>
                                                    </li>
                                                <li role="button">
                                                    <Link to="/portfolio"><b className='menu-list'>Portfolio</b></Link>    
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="author-menu">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;