import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { About } from './pages/About'
import Blog from './pages/Blog'
import Classes from './pages/Classes'
import Contact from './pages/Contact'
import Home from './pages/Home'
import RecoverPassword from './pages/RecoverPassword'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/recoverpassword" element={<RecoverPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
