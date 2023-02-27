import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './pages/sign-up';
import SignIn from './pages/sign-in';

function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<SignUp/>} />
        <Route path='/sign-in' element={<SignIn/>}  />
      </Routes>
    </Router>
  )
}

export default App;
