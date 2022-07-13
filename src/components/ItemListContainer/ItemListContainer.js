import { Link } from 'react-router-dom';
import Spinner  from "react-bootstrap/Spinner"
import { ItemFinish } from '../ItemFinish/ItemFinish'
import { ItemList } from "../ItemList/ItemList"
import { useProductos } from './useProductos'
import './ItemListContainer.scss'

export const ItemListContainer = ({greeting}) =>{
    
    const {items, loading} = useProductos()
    
    return (
        <section className='sectionItemList'>
            <div className='sectionItemList__containerTitle'>
                <h2 className='sectionItemList__containerTitle__title'>
                    {greeting}
                </h2>
            </div>
            <div className='sectionItemList__categorys'>
                <Link to={'/Productos'} className='sectionItemList__categorys__category'>Todos</Link>
                <Link to={'/category/mates'} className='sectionItemList__categorys__category'>Mates</Link>
                <Link to={'/category/termos'} className='sectionItemList__categorys__category'>Termos</Link>
                <Link to={'/category/set'} className='sectionItemList__categorys__category'>Set de Mates</Link> 
            </div>
            <div className='sectionItemList__containerItem'>
                {
                    loading
                    ?   <Spinner animation="border" role="status" variant="primary" className='spinner'>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>

                    :  <ItemList items={items}/> 
                }
            </div>
            <ItemFinish/>
        </section>
    )
}

