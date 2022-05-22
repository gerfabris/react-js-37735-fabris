//mport { Nav } from "react-bootstrap"
//import Navbar from 'react-bootstrap/Navbar'
import './Navbar.scss'
import {BsFillCartCheckFill} from "react-icons/bs"

export const NavBar = ({logo,logoHref,logoAlt="Logo",link1="inicio", link2="productos", link3="nosotros"}) =>{
    const icono = <BsFillCartCheckFill/>
    return(
        <nav className="navbar">
            <div className="navbar__container__logo">
                <a href={logoHref}>
                    <img src={logo} alt={logoAlt} className="navbar__container__logo__img"/>
                </a>
            </div>
            <div className='navbar__container__link'>
                <ul className='navbar__container__link__ul'>
                    <li className='navbar__container__link__ul__li'>
                        <a href='#' className='navbar__container__link__ul__li__a'>{link1}</a>
                    </li>
                    <li className='navbar__container__link__ul__li'>
                        <a href='#' className='navbar__container__link__ul__li__a'>{link2}</a>
                    </li>
                    <li className='navbar__container__link__ul__li'>
                        <a href='#' className='navbar__container__link__ul__li__a'>{link3}</a>
                    </li>
                </ul>
                <a href='#' className='navbar__container__link__icon'>{icono}</a>
            </div>
        </nav>
    )
}