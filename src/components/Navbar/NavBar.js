//import { Nav } from "react-bootstrap"
//import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import {imagenes} from '../assets/img/img';
import { CartWidget } from '../CartWidget/CartWidget';
import './Navbar.scss'

const datosNavBar = {
    link1: "Inicio",
    link2: "Productos",
    link3: "Nosotros",
}

export const NavBar = () =>{
    const {link1, link2, link3} = datosNavBar
    return(
        <nav className="navbar">
            <div className="navbar__container__logo">
                <Link to={"/"}>
                    <img src='../assets/logo/icon.png' alt={imagenes[2].alt} className="navbar__container__logo__img"/>
                </Link>
            </div>
            <div className='navbar__container__link'>
                <ul className='navbar__container__link__ul'>
                    <li className='navbar__container__link__ul__li'>
                        <Link to={`/${link1}`} className='navbar__container__link__ul__li__a'>{link1}</Link>
                    </li>
                    <li className='navbar__container__link__ul__li'>
                        <Link to={`/${link2}`} className='navbar__container__link__ul__li__a'>{link2}</Link>
                    </li>
{/*                     <li className='navbar__container__link__ul__li'>
                        <Link to={`/${link3}`} className='navbar__container__link__ul__li__a'>{link3}</Link>
                    </li> */}
                    <li className='navbar__container__link__ul__liCategorys'>
                        <Link to={'/category/mates'} className='navbar__container__link__ul__liCategorys__category'>Mates</Link>
                        <Link to={'/category/termos'} className='navbar__container__link__ul__liCategorys__category'>Termos</Link>
                        <Link to={'/category/set'} className='navbar__container__link__ul__liCategorys__category'>Set de Mates</Link> 
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </nav>
    )
}

{/* <header className="header2">
<div className="header__container">

    <Link to={"/"}><h1 className="header__logo">PROYECTO CODER</h1></Link>
    

    <nav className="header__navbar">
        <Link to={"/categorias/remeras"} className="header__navlink">Remeras</Link>
        <Link to={"/categorias/buzos"} className="header__navlink">Buzos</Link>
        <Link to={"/categorias/zapatillas"} className="header__navlink">Zapatillas</Link>
    </nav>
</div>
</header> */}