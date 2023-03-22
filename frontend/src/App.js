import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Footer } from './user/components/footer/Footer';
import { Header } from './user/components/header';
import Dashboard from './seller';
import About from './user/pages/About';
import Catergory from './user/pages/Category';
import CategoryList from './user/pages/CategoryList';
import Contact from './user/pages/Contact';
import Home from './user/pages/Home';
import { Login } from './user/pages/Login';
import Register from './user/pages/Register';
import Search from './user/pages/Search';
import Service from './user/pages/Service';
import { useState } from 'react';
import { client, ClientContext } from './user/context/client-context'
import { theme, ThemeContext } from './user/context/theme-context'
import { useEffect } from 'react';
import { getCurrentClient } from './user/api';
import { AdminDashboard } from './admin/pages/index'
import { Login as AdminLogin } from './admin/pages/Login'

import { User } from './user'
import { PrivateRoutes } from './utils/PrivateRoutes';

import { isLoggedIn } from './user/api';
import { Navigate } from 'react-router-dom';
// import { Test2 } from './Test2';
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

  const updateLanguage = (lang, text) => {
    setCurrentTheme({ language: lang, text: text})
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
      } else {
        setCurrentClient(client)
      }
    })
  }

  const [sellerLoggedIn, setSellerLoggedIn] = useState(false)
  useEffect(() => {
    isLoggedIn((data) => {
      setSellerLoggedIn(data.success)
    })
  }, [])

  return (
    <ThemeContext.Provider value={{ currentTheme, updateLanguage }}>
      <ClientContext.Provider value={{ currentClient, addServiceIdToRatings, updateClient }}>
        <Router>
          <Routes>
            <Route exact path='/*' element={<User />}></Route>
            {/* <Route exact path='/admin' element={<AdminLogin />}></Route> */}
            {/* <Route exact path='/about' element={<PrivateRoutes/>}> */}
            <Route exact path='/seller/*' element={<PrivateRoutes><Dashboard /></PrivateRoutes>}></Route>
            <Route exact path='/admin/dashboard/*' element={<AdminDashboard />}></Route>
            {/* <Route exact path='/test/*' element={<Test />}></Route> */}
            {/* <Route exact path='/test/card' element={<Test2 />}></Route> */}
            {/* </Route> */}
          </Routes>
        </Router>
      </ClientContext.Provider>
    </ThemeContext.Provider>

  );
}

export default App;
