import {Navigate, Link} from 'react-router-dom'
import './Inicio.scss'

const datosNavBar = {
    link2: "Productos",
    link3: "Nosotros",
}

export const Inicio = () =>{
    const { link2, link3} = datosNavBar
    return(
        <section className='inicio'>
            <div className='inicio__containerTitle'>
                <h1>
                    Tomate un mate y olvidate... 
                </h1>
            </div>
            <div className='inicio__contenedorLinks'>
                <li className='inicio__contenedorLinks__li'>
                    <Link to={`/${link2}`} className="inicio__contenedorLinks__li__link">{link2}</Link>
                </li>
                <li className='inicio__contenedorLinks__li'>
                    <Link to={`/${link3}`} className="inicio__contenedorLinks__li__link">{link3}</Link>
                </li>
            </div>
        </section>
    )
}