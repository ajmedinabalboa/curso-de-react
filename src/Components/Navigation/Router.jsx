import Home from '../../screens/Home.jsx';
import Products from '../../screens/Product.jsx';
import About from '../../screens/About.jsx';
import Think from '../../screens/Think.jsx';
import Counter from '../Counter/Counter.jsx';
import Login from '../../screens/Login.jsx';
import LandingPage from '../../screens/LandingPage.jsx';
import { Routes, Route } from 'react-router';

const Router = () => {
    return (
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />} />
        <Route path="think" element={<Think />} />
        <Route path="about" element={<About />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    );
 };

 export default Router;