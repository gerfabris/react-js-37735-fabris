import { Link } from 'react-router-dom';
import './ItemFinish.scss'

export const ItemFinish = () =>{
    
    return(
        <div className='itemFinishContainer'>
            <Link to={'/cart'}>
                <button className='itemFinishContainer__btn'> Finalizar compra</button>
            </Link>
        </div>
    )
}