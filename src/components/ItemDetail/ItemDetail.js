import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { ItemFinish } from "../ItemFinish/ItemFinish";
import { ItemCount } from "../ItemCount/ItemCount."
import './ItemDetail.scss'

export const ItemDetail = ( {item} ) => {
    
    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
    }

    const handleOnAdd = () => {
        const itemToCart = {
            ...item,
            cantidad
        }
        console.log(itemToCart)
    }


    return (
        <div className='itemDetail'>
            <h2 className='itemDetail__title'>{item.title}</h2>
            <div className='itemDetail__containerRow'>
                <div className='itemDetail__container'>
                    <img src={item.pictureImg} alt="imagen producto" className='itemDetail__img' />
                </div>
                <div className='itemDetail__container'>
                    <h3 className='itemDetail__description'>{item.description}</h3>
                    <h4 className='itemDetail__features'>{item.features}</h4>
                    <h5 className='itemDetail__price'>Precio: ${item.price}</h5>
                    <ItemCount 
                        stock={item.stock}
                        counter={cantidad}
                        setCounter={setCantidad}
                        onAdd={handleOnAdd}
                    />
                </div>
            </div>
            <ItemFinish/>
            <button onClick={handleVolver} className='btn btn-primary my-2 itemDetail__btn'>Volver atrás</button>
        </div>
    )
}


