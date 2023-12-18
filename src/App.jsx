import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import MainPage from './Pages/MainPage'
import Todo from './Pages/Todo'
import Shopping from './Pages/Shopping'
import './App.css'

function App() {
  return (
    <>
      {/* Navbar common for all the routes */}
      <Navbar />
      {/* All the routes that we used */}
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Todo' element={<Todo/>}/>
        <Route path='/Shopping' element={<Shopping/>}/>
      </Routes>

    </>
  )
}

export default App
