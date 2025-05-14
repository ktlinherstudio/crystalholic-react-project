import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Menu from './pages/Menu'
import KnowledgeCrystal from './pages/KnowledgeCrystal'
import Cover from './pages/Cover'

export default function App() {
  return (
    <div className="page-layout">
      <BrowserRouter>
        <main className="main-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/KnowledgeCrystal" element={<KnowledgeCrystal />} />
            <Route path="/cover" element={<Cover />} />

          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}