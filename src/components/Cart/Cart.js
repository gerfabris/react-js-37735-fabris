import { useCartContext } from "../../context/CartContext"
import { BsFillTrashFill } from "react-icons/bs"
import { useNavigate } from 'react-router-dom';
import { EmptyCart } from "./EmptyCart";
import './Cart.scss'

export const Cart = () => {

    const {cart, totalPrice, emptyCart, removeItem} = useCartContext()

    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }

    if (cart.length === 0) return <EmptyCart/>
    
    return (
        <section className="containerCart">
            <h3 className="containerCart__title">Aquí tu compra, ¿no quieres llevar más? Piénsalo 😉</h3>
            <div className="containerCart__contenedorItem">
                {
                    cart.map((item) => (
                    <div key={item.id} className="containerCart__item">
                        <p>{item.title}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio: ${item.price * item.cantidad}</p>
                        <button onClick={() => removeItem(item.id)} className="btn btn-danger"><BsFillTrashFill/></button>
                    </div>
                    ))
                }
            </div>
            <p className="containerCart__total">TOTAL: ${totalPrice()}</p>
            <button onClick={emptyCart} className="btn containerCart__btnTrash">Vaciar carrito</button>
            <button onClick={handleVolver} className='btn btn-primary my-2 itemDetail__btn'>Volver atrás</button>
        </section>
    )
}
