//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {NavBar} from "./components/Navbar/NavBar"


function App() {
  return (
    <div className="App">
      <header className="">
        <NavBar/>
      </header>
      <main>
        <ItemListContainer greeting="Nuestros productos"/>
      </main>
    </div>
  );
}

export default App;
