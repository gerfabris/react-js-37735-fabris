import { useState } from "react";
import './ItemCount.scss'

export const ItemCount = ( {stock, setCounter, counter, onAdd} ) =>{
    
    const disminuir = () => {
        counter > 1 && setCounter(counter - 1)
    }
    const aumentar = () => {
        counter < stock && setCounter(counter + 1)
    }
    
    return(
        <div className="container__itemCount">
            <div className="itemCount">
                <button onClick={disminuir}>-</button>
                <p> {counter} </p>
                <button onClick={aumentar}>+</button>
            </div>
            <button className="container__itemCount__onAdd" onClick={onAdd}>Añadir al carrito</button>
        </div>
    )
}
