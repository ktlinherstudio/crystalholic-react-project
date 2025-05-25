import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';

import About from './pages/Others/About';
import Menu from './pages/Menu';
import KnowledgeCrystal from './pages/Others/KnowledgeCrystal';
import KnowledgeCleanse from './pages/Others/KnowledgeCleanse';
import Cover from './pages/Cover';
import CoverTest from './pages/CoverTest' ;
import CoverFeedbackTest from './pages/CoverFeedbackTest';
import NumTest1 from './pages/NumTest/NumTest1';
import NumTest2 from './pages/NumTest/NumTest2';
import Customize1 from './pages/Customize/Customize1';
import Customize2 from './pages/Customize/Customize2';
import Customize3 from './pages/Customize/Customize3';
import ShoppingCart from './pages/Shopping/ShoppingCart';
import ProductCollection from './pages/Product/ProductCollection';
import Product from './pages/Product/Product';

export default function App() {
  return (
    <div className="page-layout">
      <BrowserRouter>
        <AuthProvider>
          <ScrollToTop />
          <main className="main-content">
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/KnowledgeCrystal" element={<KnowledgeCrystal />} />
              <Route path="/KnowledgeCleanse" element={<KnowledgeCleanse />} />
              <Route path="/cover" element={<Cover />} />
              <Route path="/CoverTest" element={<CoverTest />} />
              <Route path="/CoverFeedbackTest" element={<CoverFeedbackTest />} />
              <Route path="/NumTest1" element={<NumTest1 />} />
              <Route path="/NumTest2" element={<NumTest2 />} />
              <Route path="/Customize1" element={<Customize1 />} />
              <Route path="/Customize2" element={<Customize2 />} />
              <Route path="/Customize3" element={<Customize3 />} />
              <Route path="/ShoppingCart" element={<ShoppingCart />} />
              <Route path="/ProductCollection" element={<ProductCollection />} />
              <Route path="/Product" element={<Product />} />
            </Routes>
          </main>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}
