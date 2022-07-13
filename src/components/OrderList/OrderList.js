import { Order } from '../Order/Order'
import './OrderList.scss'

export const OrderList = ( {order, total} ) => {

    return (
        <div className="container my-5 container__orderList">
            <h4>Tu orden contiene los siguientes productos</h4>
            {
                order.map((order) => <Order key={order.id} order={order} total={total}/>)
            }
            <h5>Total pagado: ${total}</h5>
        </div>
    )
}