import {BsFillCartCheckFill} from "react-icons/bs"
import './CartWidget.scss'

export const CartWidget = () =>{
    const icono = <BsFillCartCheckFill/>
    return (
        <div className="containerCartWidget"><a href='#' className='containerCartWidget__cartWidget'>{icono}</a></div>
    )
}