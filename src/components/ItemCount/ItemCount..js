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
        disabled: counter === 0
    }

    return(
        <div className="container__itemCount">
            <div className="itemCount">
                <button {...btnRestarConfig}>-</button>
                <p> {counter} </p>
                <button
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
