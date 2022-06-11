//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/Navbar/NavBar"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Inicio } from './components/Inicio/Inicio';
import { Nosotros } from './components/Nosotros/Nosotros'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Inicio/> }/>
        <Route path='/Productos' element={ <ItemListContainer greeting="Nuestros productos"/>}/> 
        <Route path='/category/:categoryId' element={ <ItemListContainer greeting="Nuestros productos"/>}/>          
        <Route path='/item/:itemId' element={<ItemDetailContainer greeting="Detalles del producto"/>} />
        <Route path='/Nosotros' element={ <Nosotros/>}/> 
        <Route path='/cart' element={<Inicio/>} /> 
        <Route path='*' element={ <Navigate to={"/"} /> } />
        {/* <Route path='*' element={ <Error404/> } /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/* 
<Route path='/nosotros' element={ <Nosotros /> } />
<Route path='/contacto' element={ <Contacto /> } /> */

{/* <Footer/> */}