import { useState } from "react";
import './ItemCount.scss'

export const ItemCount = ({stock, initial, onAdd}) =>{
    const [cantidad, setCantidad] = useState(Number(initial))
    
    const disminuir = () => {
        cantidad > 0 ? setCantidad(cantidad - 1 ) : setCantidad(cantidad);
    }
    const aumentar = () => {
        cantidad < stock ? setCantidad(cantidad + 1 ) : setCantidad(cantidad);  
    }
	const onAddHandler = () => {
		cantidad > 0? onAdd() : console.log("No selecciono nada");
		setCantidad(0);
	}
    
    return(
        <div className="container__itemCount">
            <div className="itemCount">
                <button onClick={disminuir}>-</button>
                <p> {cantidad} </p>
                <button onClick={aumentar}>+</button>
            </div>
            <button className="container__itemCount__onAdd" onClick={onAddHandler}>Añadir al carrito</button>
        </div>
    )
}