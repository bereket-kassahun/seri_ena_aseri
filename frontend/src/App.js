import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import About from './pages/About';
import Catergory from './pages/Category';
import Home from './pages/Home';
import Register from './pages/Register';
import Search from './pages/Search';
import Service from './pages/Service';
function App() {
  return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/search' element={<Search/>}></Route>
          <Route exact path='/category' element={<Catergory/>}></Route>
          <Route exact path='/service' element={<Service/>}></Route>
          <Route exact path='/register' element={<Register/>}></Route>
          <Route exact path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;
