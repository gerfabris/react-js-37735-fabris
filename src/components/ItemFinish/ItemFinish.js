import { Link } from 'react-router-dom';
import './ItemFinish.scss'

export const ItemFinish = () =>{
    
    const handleFinish = () =>{
        console.log("Nos fuimos al cart");
    }

    return(
        <div className='itemFinishContainer'>
                    <Link to={'/cart'}>
                        <button onClick={handleFinish} className='itemFinishContainer__btn'> Finalizar compra</button>
                    </Link>
        </div>
    )
}