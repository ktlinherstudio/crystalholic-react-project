import React from 'react';

import './App.css';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import { UIProvider } from './context/UIContext';

import About from './pages/Others/About';
import KnowledgeCrystal from './components/KnowledgeCrystal/KnowledgeCrystal';
import KnowledgeCleanse from './pages/Others/KnowledgeCleanse';

import Cover from './pages/Cover/Cover';
import CoverTest0527 from './pages/Cover/CoverTest0527';
import CoverTest0528 from './pages/Cover/CoverTest0528';
// import CoverFeedbackBs from './pages/Cover/CoverFeedbackBs';
// import CoverFeedbackSW from './pages/Cover/CoverFeedbackSW';

import NumTest1 from './pages/NumTest/NumTest1';
import NumTest2 from './pages/NumTest/NumTest2';
import NumTest3 from './pages/NumTest/NumTest3';
import Customize1 from './pages/Customize/Customize1';
import Customize2 from './pages/Customize/Customize2';
import Customize3 from './pages/Customize/Customize3';
import Customize4 from './pages/Customize/Customize4';
import ShoppingCart from './pages/Shopping/ShoppingCart';
import ProductCollection from './pages/Product/ProductCollection';
import Product from './pages/Product/Product';
import TarotCard0528 from './pages/Cover/TarotCard0528';

export default function App() {
  return (
    <div className="page-layout">
      <BrowserRouter>

        {/* <HashRouter> */}
        <AuthProvider>
          <UIProvider>
            <ScrollToTop />
            <main className="main-content">
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/KnowledgeCrystal" element={<KnowledgeCrystal />} />
                <Route path="/KnowledgeCleanse" element={<KnowledgeCleanse />} />

                <Route path="/" element={<Cover />} />
                <Route path="/CoverTest0527" element={<CoverTest0527 />} />
                <Route path="/CoverTest0528" element={<CoverTest0528 />} />
                <Route path="/TarotCard0528" element={<TarotCard0528 />} />

                {/* <Route path="/CoverFeedbackBs" element={<CoverFeedbackBs />} /> */}
                {/* <Route path="/CoverFeedbackSW" element={<CoverFeedbackSW />} /> */}

                <Route path="/NumTest1" element={<NumTest1 />} />
                <Route path="/NumTest2" element={<NumTest2 />} />
                <Route path="/NumTest3" element={<NumTest3 />} />
                <Route path="/Customize1" element={<Customize1 />} />
                <Route path="/Customize2" element={<Customize2 />} />
                <Route path="/Customize3" element={<Customize3 />} />
                <Route path="/Customize4" element={<Customize4 />} />
                <Route path="/ShoppingCart" element={<ShoppingCart />} />
                <Route path="/ProductCollection" element={<ProductCollection />} />
                <Route path="/Product" element={<Product />} />
              </Routes>
            </main>
          </UIProvider>
        </AuthProvider>


        {/* </HashRouter> */}
      </BrowserRouter>
    </div>
  );
}
