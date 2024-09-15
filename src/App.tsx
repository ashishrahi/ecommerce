import Navbar from './components/navbar/Navbar'
import  Home  from "./pages/home/Home"
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notfound/NotFound";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/shop/Shop';
import SignUpForm from './pages/authentication/Signup';
import SignIn from './pages/authentication/Signin';
import Footer from './components/footer/Footer';
import SingleProduct from './pages/single_product/SingleProduct';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';

const App = () => {
  return (
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/signin" element={<SignIn />} />

        <Route path="/signup" element={<SignUpForm />} />

        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<SingleProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App