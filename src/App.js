
import Navbar from './Components/Navbar';
import Newsletter from './Components/Newsletter';
import Footer from './Components/Footer';

import Home from './Components/Home';
import Shop from './Components/Shop';
import About from './Components/About';
import Contact from './Components/Contact';
import Error from './Components/Error404';

import {BrowserRouter, Route , Routes} from 'react-router-dom';

import './App.css';

import Order from './Components/Order';

function App() {
  return (
    <>
    <Navbar />
    <BrowserRouter>
        <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/order' element={<Order />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </BrowserRouter>
    <Newsletter/>
    <Footer />
    </>
  );
}

export default App;
