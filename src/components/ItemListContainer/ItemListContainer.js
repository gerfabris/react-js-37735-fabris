import './ItemListContainer.scss'
import { useEffect, useState } from "react"
import Spinner  from "react-bootstrap/Spinner"
import { pedirProductos } from "../../components/mock/pedirProductos"
import { ItemList } from "../ItemList/ItemList"
import { useParams, Link } from 'react-router-dom';

export const ItemListContainer = ({greeting}) =>{
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    const params = useParams()
    console.log(params);
    console.log(categoryId);

    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((resp) => {
                if (!categoryId) {
                    setItems( resp )
                } else {
                    setItems( resp.filter((item) => item.category === categoryId) )
                }
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])
    
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
        </section>
    )
}