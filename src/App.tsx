import './App.css';
import './main.css';
import Home from './pages/Home';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import FullFlower from './pages/FullFlower';
import OrderPage from './pages/OrderPage/OrderPage';

function App() {
  return (
    <div className="App">
      <header className="header">
        <Header />
      </header>
      <section className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/flower/:id" element={<FullFlower />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
