import './style.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemsListContainer';
import ContainerCardItem from './components/components-card/ContainerCardItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Descrip from './components/components-card/Descrip';

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <div className="containerItemList">
          <ItemListContainer
            ItemUno="Mates"
            ItemDos="Termos"
            ItemTres="Bombillas"
          />
        </div>
        
      </div>
      <Routes>
        <Route path='/' element={<ContainerCardItem/>} />
        <Route path='/item/:idItem' element={<Descrip/>} />
        <Route path='/category/:idCategory' element={<ContainerCardItem/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
