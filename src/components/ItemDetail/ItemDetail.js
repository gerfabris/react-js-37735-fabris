import { useNavigate } from 'react-router-dom';
import { ItemCount } from "../ItemCount/ItemCount."
import './ItemDetail.scss'

export const ItemDetail = ( {item} ) => {
    const onAdd = () => {
		console.log("Agregar al carrito");
	};

    const navigate = useNavigate()
    const handleVolver = () => {
        navigate(-1)
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
                    <ItemCount stock={5} initial={1} onAdd={onAdd}></ItemCount>
                </div>
            </div>
            <button onClick={handleVolver} className='btn btn-primary my-2 itemDetail__btn'>Volver atrás</button>
        </div>
    )
}