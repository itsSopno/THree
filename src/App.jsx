import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Loader from './Loader/Loader'
import LenisScroll from './LenisScroll'
import About2 from './components/About2/About2'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {isLoading && <Loader finishedLoading={handleLoadingComplete} />}
      <LenisScroll>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home isLoading={isLoading} />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/more" element={<About2></About2>} />
          </Routes>
        </main>
      </LenisScroll>
    </>
  )
}

export default App