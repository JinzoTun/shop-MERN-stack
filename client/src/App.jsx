import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './pages/SignUp/SignUp';


function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    <Footer />  
    </BrowserRouter>
  )
}

export default App
