import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WelcomPage from './pages/welcomPage/welcomPage';
import HomePage from './pages/homePage/homePage';
import PageNotFound from './pages/pageNotFound/pageNotFound';
import './App.css'

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomPage />} />
          <Route path="/listing" element={<HomePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

/**
 * to-do list
 * format and cleanup ,delete unused code and files
 * push to githup
 * use path alias
 * fix issue of edit 
 */