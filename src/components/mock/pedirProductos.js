import {productos} from "./productos"

export const pedirProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                resolve(productos)
        }, 2000)
    })
}