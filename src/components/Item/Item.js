import { ItemCount } from '../ItemCount/ItemCount.'
import './Item.scss'

export const Item = ({item}) =>{
    
    const onAdd = () => {
		console.log("Agregar al carrito");
	};
    
    return (
        <div className='item'>
            <h3>{item.title}</h3>
            <img src={item.pictureImg} alt="imagen producto" />
            <h4>Precio: ${item.price}</h4>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
    )
}
