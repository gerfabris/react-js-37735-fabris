//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {NavBar} from "./components/Navbar/NavBar"
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <header className="">
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting="Nuestros productos"/>
        <ItemDetailContainer greeting="Detalle del producto" />
      </main>
    </div>
  );
}

export default App;
