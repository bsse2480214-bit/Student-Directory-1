import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Footer from './components/Footer'

import Home from './pages/Home'
import Students from './pages/Students'
import Courses from './pages/Courses'


function App() {

  return (

    <BrowserRouter>

      <Navbar />


      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/courses"
          element={<Courses />}
        />

          

      </Routes>
      <Footer />
   

    </BrowserRouter>

  )
}

export default App