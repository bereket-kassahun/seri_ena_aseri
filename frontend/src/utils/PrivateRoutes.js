import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { isLoggedIn } from '../user/api';
import Dashboard from '../seller';

export const PrivateRoutes = () => {
  const navigate = useNavigate()
  const [dashboard, setDashboard] = useState(<></>)
  useEffect(() => {
    isLoggedIn((data) => {
      if (data.success) {
        setDashboard(<Dashboard></Dashboard>)
      } else {
        navigate("/login")
      }
    })
  }, [])
  return (
    <>
      {dashboard}
    </>
  )

}

