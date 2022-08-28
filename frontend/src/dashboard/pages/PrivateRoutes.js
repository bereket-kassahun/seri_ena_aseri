import { Navigate, Outlet } from 'react-router-dom';
import { SellerContext } from '../context/seller-context';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

export const PrivateRoutes = () => {
  const location = useLocation();
  const { _id } = useContext(SellerContext);

  return _id != "" 
    ? <Outlet />
    : <Navigate to="/" replace state={{ from: location }} />;
}

