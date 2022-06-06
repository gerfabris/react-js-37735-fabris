//import {Detail} from '../ItemDetail/Detail/Detail'
import './ItemDetail.scss'

import { ItemCount } from "../ItemCount/ItemCount."

export const ItemDetail = ( {details} ) => {
    const onAdd = () => {
		console.log("Agregar al carrito");
	};

    return (
        <div className='itemDetail'>
            <h2>{details.title}</h2>
            <img src={details.pictureImg} alt="imagen producto" />
            <h3>{details.description}</h3>
            <h4>{details.features}</h4>
            <h5>Precio: ${details.price}</h5>
            <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
        </div>
    )
}