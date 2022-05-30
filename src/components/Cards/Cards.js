import { ItemCount } from '../ItemCount/ItemCount.'
import './Cards.scss'

export const Cards = () =>{
    
    const onAdd = () => {
		console.log("Agregar al carrito");
	};
    
    return (
        <div className='card'>
            Esto será un producto
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
}