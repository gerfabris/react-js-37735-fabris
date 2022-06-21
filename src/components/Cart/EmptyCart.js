import { Link } from "react-router-dom"
import './Cart.scss'


export const EmptyCart = () => {
    return (
        <div className="container__emptyCart">
            <h2 className="container__emptyCart__title">¡Tu carrito está vacío!</h2>
            <p> ¿Por qué no compras algo?</p>
            <Link to="/" className="btn container__emptyCart__btn">Ir a comprar</Link>
        </div>
    )
}