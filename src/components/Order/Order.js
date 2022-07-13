

export const Order = ({order}) =>{
    return(
        <div className="container my-1">
            <p>Producto: {order.title}</p>
            <p>Cantidad: {order.cantidad}</p>
            <hr/>
        </div>
    )
}