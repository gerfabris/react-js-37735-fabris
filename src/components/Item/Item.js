import { ItemCount } from '../ItemCount/ItemCount.'
import { Link } from "react-router-dom"
import './Item.scss'

export const Item = ({item}) =>{
    
    const onAdd = () => {
		console.log("Agregar al carrito");
	};
    
    return (
        <div className='item'>
            <h3 className='item__title'>{item.title}</h3>
            <img src={item.pictureImg} alt="imagen producto" className='item__img' />
            <h4 className='item__price'>Precio: ${item.price}</h4>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            <Link to={`/item/${item.id}`}>
                <button className="btn btn-primary my-2 item__btn">Ver más</button>
            </Link>
        </div>
    )
}
