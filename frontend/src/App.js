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
import { useState } from 'react';
import { client, ClientContext } from './context/client-context'
import { theme, ThemeContext } from './context/theme-context'
import { useEffect } from 'react';
import { getCurrentClient } from './api';
function App() {

  const [currentClient, setCurrentClient] = useState(client)
  const [currentTheme, setCurrentTheme] = useState(theme)

  useEffect(() => {
    getClientInfo()
    console.log("from app")
  }, [])


  const addServiceIdToRatings = (serviceId) => {
    currentClient.ratings = [...currentClient.ratings, serviceId]
  }

  const updateClient = () => {
    getClientInfo()
  }

  const updateLanguage = (lang) => {
    setCurrentTheme({ language: lang })
  }

  const getClientInfo = () => {
    getCurrentClient((data) => {
      if (data.success) {
        setCurrentClient({
          _id: data._id,
          email: data.email,
          ratings: data.ratings,
          username: data.username
        })
        console.log("intro", data)
      }
    })
  }
  return (
    <ThemeContext.Provider value={{currentTheme, updateLanguage}}>
      <ClientContext.Provider value={{ currentClient, addServiceIdToRatings, updateClient }}>
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
      </ClientContext.Provider>
    </ThemeContext.Provider>

  );
}

export default App;
