//import './App.css';
import logo from '../src/assets/img/COHETE_NEGRO.png';
import {NavBar} from "./components/Navbar/NavBar"

function App() {
  return (
    <div className="App">
      <header className="">
        <NavBar logo={logo} logoAlt="Logo Ecommerce" logoHref="#" link1="inicio" link2="nosotros" link3="productos" />
      </header>
    </div>
  );
}

export default App;
