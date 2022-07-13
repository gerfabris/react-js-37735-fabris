import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

export const useProductos = () =>{
    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        const productosRef = collection(db, "productos" )
        const q = categoryId ? query(productosRef, where("category", "==", categoryId)) : productosRef

        getDocs(q)
            .then((resp) =>{
                const newItems = resp.docs.map((doc) => {
                    return { 
                        id: doc.id,
                        ...doc.data()
                    }
                })               
                setItems( newItems)
            })
            .catch((error) => {
                console.log('ERROR', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])
    
    return {items, loading}
}