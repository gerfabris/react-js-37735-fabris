import {BsFillCartCheckFill} from "react-icons/bs"
import { Link } from "react-router-dom"
import { useCartContext } from '../../context/CartContext'
import './CartWidget.scss'

export const CartWidget = () =>{

    const {totalQuantity} = useCartContext()

    return (
        <Link to="/cart" className="containerCartWidget">
            <div className="containerCartWidget__cartWidget">
                <BsFillCartCheckFill/>
            </div>
            <span className='containerCartWidget__span'>{totalQuantity()}</span>
        </Link>
    )
}