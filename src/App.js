import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { AppRoutes } from './components/AppRoutes/AppRoutes';
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <AppRoutes/>
    </CartProvider>
  );
}

export default App;

