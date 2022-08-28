import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Footer } from './components/footer/Footer';
import { Header } from './components/header';
import Dashboard from './dashboard';
import { PrivateRoutes } from './dashboard/pages/PrivateRoutes';
import About from './pages/About';
import Catergory from './pages/Category';
import CategoryList from './pages/CategoryList';
import Contact from './pages/Contact';
import Home from './pages/Home';
import { Login } from './pages/Login';
import Register from './pages/Register';
import Search from './pages/Search';
import Service from './pages/Service';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/search' element={<Search />}></Route>
        <Route exact path='/category' element={<Catergory />}></Route>
        <Route exact path='/service' element={<Service />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/about' element={<About />}></Route>
        <Route exact path='/contact_us' element={<Contact />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/category_list' element={<CategoryList />}></Route>
        {/* <Route exact path='/about' element={<PrivateRoutes/>}> */}
        <Route exact path='/seller/*' element={<Dashboard />}></Route>
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
