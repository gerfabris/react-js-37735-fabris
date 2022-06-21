import { useState } from "react"
import { Link } from "react-router-dom"
import { ItemCount } from '../ItemCount/ItemCount.'
import { ItemFinish } from "../ItemFinish/ItemFinish"
import { useCartContext } from "../../context/CartContext"
import './Item.scss'

export const Item = ({item}) =>{
    const {addItem, isInCart} = useCartContext()
    const [cantidad, setCantidad] = useState(0)

    const handleOnAdd = () => {
        const itemToCart = {
            ...item,
            cantidad
        }
        addItem(itemToCart)
    }
    
    return (
        <div className='item'>
            <h3 className='item__title'>{item.title}</h3>
            <img src={item.pictureImg} alt="imagen producto" className='item__img' />
            <h4 className='item__price'>Precio: ${item.price}</h4>
            {
                isInCart(item.id)
                ? <ItemFinish/>
                :
                <ItemCount 
                    stock={item.stock}
                    counter={cantidad}
                    setCounter={setCantidad}
                    onAdd={handleOnAdd}
                />
            }
            <Link to={`/item/${item.id}`}>
                <button className="btn btn-primary my-2 item__btn">Ver más</button>
            </Link>
        </div>
    )
}
