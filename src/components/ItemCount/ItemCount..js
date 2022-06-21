import { useState } from "react";
import './ItemCount.scss'

export const ItemCount = ( {stock, setCounter, counter, onAdd} ) =>{
    
    const disminuir = () => {
        counter > 0 && setCounter(counter - 1)
    }
    const aumentar = () => {
        counter < stock && setCounter(counter + 1)
    }
    const btnRestarConfig = {
        onClick: disminuir,
        //className: `btn mx-1 ${counter === 0 ? "btn-outline-danger" : "btn-outline-primary"} ${counter === 1 ? "min-value" : ''}`,
        disabled: counter === 0
    }

    return(
        <div className="container__itemCount">
            <div className="itemCount">
                <button {...btnRestarConfig}>-</button>
                <p> {counter} </p>
                <button
                    //className={counter === stock ? "btn mx-1 btn-danger" : "btn mx-1 btn-primary"}
                    disabled={counter === stock}
                    onClick={aumentar}
                >
                    +
                </button>
            </div>
            <button disabled={counter === 0} className="container__itemCount__onAdd" onClick={onAdd}>Añadir al carrito</button>
        </div>
    )
}
