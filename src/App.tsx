import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoverPassword } from './pages/RecoverPassword';
import { Signin } from './pages/Signin';
import { SignUp } from './pages/SignUp';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/recoverpassword' element={<RecoverPassword/>} />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
}

export default App;
