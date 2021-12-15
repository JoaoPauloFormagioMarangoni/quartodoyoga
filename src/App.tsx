import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import Home from './pages/Home';
import RecoverPassword from './pages/RecoverPassword';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/recoverpassword' element={<RecoverPassword/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
