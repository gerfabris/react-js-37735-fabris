import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsWhatsapp, BsFillGeoAltFill, BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs'
import './Footer.scss'

export const Footer = () => {
    return(
        <footer>
            <div className="container text-center text-md-left">    
                <div className="row">
                    <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
                        <div className="container footer__container" >                       
                            <Link to={"/"} className="footer__container__logo">
                                <img src='../assets/logo/icon.png' className="footer__container__logo__img" alt="Logo Matear"/>
                                Mate<span>AR</span>
                            </Link>
                        </div>
                    </div>
                    <hr className="clearfix w-100 d-md-none"/>
                    <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1 container">
                        <h5 className="font-weight-bold text-uppercase mb-4">Secciones</h5>            
                        <ul className="list-unstyled">
                            <li><p>
                                <Link to={"/"}>Inicio</Link>
                            </p></li>
                            <li><p>
                                <Link to={"Productos"}>Productos</Link>
                            </p></li>
                            <li><p>
                                <Link to={"Nosotros"}>Nosotros</Link>
                            </p></li>
                            <li><p>
                                <Link to={"/"}>Contacto</Link>
                            </p></li>
                        </ul>
                    </div>
                    <hr className="clearfix w-100 d-md-none"/>    
                    <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">    
                        <h5 className="font-weight-bold text-uppercase mb-4">Contacto</h5>    
                        <ul className="list-unstyled">
                            <li><p>
                                <BsFillGeoAltFill className='footer__icons'/> Olegario V. Andrade 315, Mendoza, Argentina
                            </p></li>
                            <li><p>
                                <BsFillEnvelopeFill className='footer__icons'/>contacto@matear.com.ar
                            </p></li>
                            <li>
                            <p>
                                <BsFillTelephoneFill className='footer__icons'/> + 549 261 248-1549</p>
                            </li>
                        </ul>
                    </div>
                    <hr className="clearfix w-100 d-md-none"/>    
                    <div className="col-md-2 col-lg-2 text-center mx-auto my-4 footer__redes">
                        <h5 className="font-weight-bold text-uppercase mb-4">Nuestras Redes</h5>            
                        <div className="socialMedia">
                            <a href="https://www.facebook.com/100670682084672/" type="button" target="_blank">
                                <BsFacebook/>
                            </a>
                            <a href="https://instagram.com/fabrisfernandezlafi.ejuridico?utm_medium=copy_link" type="button" target="_blank">
                                <BsInstagram/>
                            </a>                            
                            <a href="http://wa.me/5492612481549" type="button" target="_blank">
                                <BsWhatsapp/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container footer__copyright text-center">
                <Link to={"/"}> Copyright © 2022 MATEAR</Link>
            </div>
        </footer>    
    )
}