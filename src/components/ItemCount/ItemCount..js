import { useState } from "react";

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
        <div>
            <button onClick={disminuir}>-</button>
            <p> {cantidad} </p>
            <button onClick={aumentar}>+</button>
            <button onClick={onAddHandler}>Añadir al carrito</button>
        </div>
    )
}