import { Link, Navigate } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"
import { useGenerarOrden } from "./useGenerarOrden"
import { EmptyCart } from '../Cart/EmptyCart'
import { OrderList } from "../OrderList/OrderList"
import { Formik } from "formik"
import { schema } from "./schema"
import './Checkout.scss'

export const Checkout = () => {

    const { cart, emptyCart } = useCartContext()
    const {orderId,outOfStock,order,generarOrden} = useGenerarOrden()

    if(outOfStock){
        
        return (
            <div className="container my-5">
                <h2>¡Lo sentimos!</h2>
                <hr/>
                <p className="alert alert-danger">Hay items sin stock</p>
                <Link to="/" className="btn container__emptyCart__btn">Ir a comprar</Link>
            </div>
            
        )
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>¡Gracias por tu compra!</h2>
                <hr/>
                <p>Tu número de orden es: {orderId}</p>
                <OrderList order= {order.items} total={order.total} />
                <EmptyCart/>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5 container__checkout">
            <h2>Finalizar compra</h2>
            
            <Formik
                initialValues={{
                    nombre : "",
                    email: "",
                    direccion: ""
                }}
                onSubmit={generarOrden}
                validationSchema={schema}
            >
                {(formik) => (
                    <form onSubmit={formik.handleSubmit} className="checkout__formulario">
                        <label for="nombre">Nombre y apellido del titular de la compra</label>
                        <input
                            value={formik.values.nombre}
                            name="nombre"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Mateo Matienzo"
                            className="form-control my-2"
                        />
                        {formik.errors.nombre && <p className="alert alert-danger">{formik.errors.nombre}</p>}
                        <label for="email">Email del titular de la compra</label>
                        <input
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="contacto@matear.com.ar"
                            className="form-control my-2"
                        />
                        {formik.errors.email && <p className="alert alert-danger">{formik.errors.email}</p>}
                        <label for="direccion">Dirección del titular de la compra</label>
                        <input
                            value={formik.values.direccion}
                            name="direccion"
                            onChange={formik.handleChange}
                            type={"text"}
                            placeholder="Olegario V. Andrade 315"
                            className="form-control my-2"
                        />
                        {formik.errors.direccion && <p className="alert alert-danger">{formik.errors.direccion}</p>}
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                )}
            </Formik>
                        
            <button onClick={emptyCart} className="btn my-2 checkout__btn">Cancelar mi compra</button>
        </div>
    )
}
