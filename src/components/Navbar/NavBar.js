//import { Nav } from "react-bootstrap"
//import Navbar from 'react-bootstrap/Navbar'
import {imagenes} from '../assets/img/img';
import './Navbar.scss'
import { CartWidget } from '../CartWidget/CartWidget';
const datosNavBar = {
    logoHref: "#",
    link1: "Inicio",
    link2: "Productos",
    link3: "Nosotros",
}

export const NavBar = () =>{
    const {logoHref,link1, link2, link3} = datosNavBar
    return(
        <nav className="navbar">
            <div className="navbar__container__logo">
                <a href={logoHref}>
                    <img src={imagenes[2].img} alt={imagenes[2].alt} className="navbar__container__logo__img"/>
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
            </div>
            <CartWidget/>
        </nav>
    )
}