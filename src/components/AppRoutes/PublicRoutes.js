import { ItemListContainer } from "../ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer';
import { Inicio } from '../Inicio/Inicio';
import { Nosotros } from '../Nosotros/Nosotros'
import { Cart } from '../Cart/Cart';
import { Checkout } from '../Checkout/Checkout';
import { Routes, Route, Navigate } from 'react-router-dom'

export const PublicRoutes = () => {
    return (
            <Routes>
                <Route path='/' element={ <Inicio/> }/>
                <Route path='/Productos' element={ <ItemListContainer greeting="Nuestros productos"/>}/> 
                <Route path='/category/:categoryId' element={ <ItemListContainer greeting="Nuestros productos"/>}/>          
                <Route path='/item/:itemId' element={<ItemDetailContainer greeting="Detalles del producto"/>} />
                <Route path='/Nosotros' element={ <Nosotros/>}/> 
                <Route path='/cart' element={<Cart/>} />
                <Route path='/checkout' element={<Checkout/>} />
                <Route path='*' element={ <Navigate to={"/"} /> } />
            </Routes>
    )
}