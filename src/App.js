//import './App.css';
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import {NavBar} from "./components/Navbar/NavBar"

function App() {
  return (
    <div className="App">
      <header className="">
        <NavBar/>
      </header>
      <main>
        <ItemListContainer/>
      </main>
    </div>
  );
}

export default App;
