import { useEffect, useState } from "react"
import {useParams} from 'react-router-dom';
import Spinner  from "react-bootstrap/Spinner"
import { pedirProductos } from "../../components/mock/pedirProductos"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"
import './ItemDetailContainer.scss'

export const ItemDetailContainer = ({greeting}) =>{
    
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        const docRef = doc(db, "productos", itemId)
        getDoc(docRef)
            .then((doc) => {
                setItem( {id: doc.id, ...doc.data()} )
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <section className='sectionItemDetailContainer'>
            <div className='sectionItemDetailContainer__containerTitle'>
                <h2 className='sectionItemDetailContainer__containerTitle__title'>
                    {greeting}
                </h2>
            </div>
            <div className='sectionItemDetailContainer__containerDetail'>
                {
                    loading
                    ?   <Spinner animation="border" role="status" variant="primary" className='spinner'>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    :  <ItemDetail item={item} />
                }
            </div>
        </section>
    )
}
/* useEffect(() => {
    setLoading(true)
    pedirProductos()
        .then((resp) => {
            setItem(resp.find((item => item.id === Number(itemId))))
        })
        .catch((error) => {
            console.log('ERROR', error)
        })
        .finally(() => {
            setLoading(false)
        })
}, []) */