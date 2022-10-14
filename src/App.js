import { BrowserRouter, Route,  Routes } from "react-router-dom";
import "./App.css";
import Cart from "./componentes/Cart";
import CartContextProvider from "./componentes/CartContext";
import ItemDetailContainer from './componentes/ItemDetailContainer'
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar";


const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route  path="/" element={<ItemListContainer />}/>
        <Route  path="/categoria/:categoria" element={<ItemListContainer/>}/>
        <Route  path="/Item/:id" element={<ItemDetailContainer/>}/>
        <Route  path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>

  );
}

export default App;