import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'

export default function App() {
  return (
    <div className="page-layout">
      <BrowserRouter>
        <main className="main-content">
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
