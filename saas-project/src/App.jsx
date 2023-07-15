import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomPage from './pages/welcomPage/welcomPage';
import HomePage from './pages/homePage/homePage';
import './App.css'

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomPage />} />
          <Route path="/listing" element={<HomePage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
