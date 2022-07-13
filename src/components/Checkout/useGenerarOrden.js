import { collection, getDocs, addDoc, writeBatch, query, where, documentId } from "firebase/firestore"
import { db } from "../firebase/config"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"

export const useGenerarOrden = () => {

    const { cart, totalPrice, emptyCart } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [outOfStock, setOutOfStock] = useState(false)
    const [order, setOrder] = useState([])

    const generarOrden = async (values) => {

        const orden = {
            buyer: values,
            items: cart.map(({id, cantidad, title, price}) => ({id, cantidad, title, price})),
            total: totalPrice()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where(documentId(), 'in', cart.map(item => item.id)))

        const outOfStock = []
        const productos = await getDocs(q)

        productos.docs.forEach((doc) => {
            const itemToUpdate = cart.find(prod => prod.id === doc.id)

            if ((doc.data().stock - itemToUpdate.cantidad) >= 0) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.cantidad
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })

        if (outOfStock.length === 0) {
            addDoc(ordersRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrderId(doc.id)
                    emptyCart()
                    setOrder(orden)
                })
        } else {
            setOutOfStock(true)
            emptyCart()
        }
    }

    return {
        generarOrden, 
        orderId,
        outOfStock,
        order
    }
}