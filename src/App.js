import './style.css';
import NavBar from './components/header/NavBar';
import ContainerCardItems from './components/components-card/ContainerCardItem';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItems from './components/components-card/detailsItems';
import ProviderContextoListCart from '../src/components/components-card/providerContextCart';


function App() {

  return (
    <ProviderContextoListCart>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ContainerCardItems />} />
          <Route path='/item/:idItem' element={<DetailsItems />} />
          <Route path='/category/:idCategory' element={<ContainerCardItems />} />
        </Routes>
      </BrowserRouter>
    </ProviderContextoListCart>


  );
}

export default App;