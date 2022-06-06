import './ItemDetailContainer.scss'
import { useEffect, useState } from "react"
import Spinner  from "react-bootstrap/Spinner"
import { pedirProductos } from "../../components/mock/pedirProductos"
import { ItemDetail } from "../ItemDetail/ItemDetail"

export const ItemDetailContainer = ({greeting}) =>{
    
    const [detail, setDetail] = useState([])
    const [loading, setLoading] = useState(true)

    const detailId = 3

    useEffect(() => {
        setLoading(true)
        pedirProductos()
            .then((resp) => {
                setDetail( resp.find((detail) => detail.id === detailId) )
            })
            .catch((error) => {
                console.log('ERROR', error)
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
                    :  <ItemDetail details={detail} />
                }
            </div>
        </section>
    )
}