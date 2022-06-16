import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { BrowserRouter} from 'react-router-dom'
import { NavBar } from "./components/Navbar/NavBar"
import { HandleRoutes } from './components/HandleRoutes/HandleRoutes';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <HandleRoutes/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

/* 
<Route path='/nosotros' element={ <Nosotros /> } />
<Route path='/contacto' element={ <Contacto /> } /> */

{/* <Footer/> */}