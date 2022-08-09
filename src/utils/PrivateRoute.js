import { Navigate } from 'react-router-dom'
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const useAuth = () => {
  const user = useContext(AuthContext)
  return user.user
}

const PrivateRoute = ({ children }) => {
    const isAuth = useAuth();
    return  (isAuth ?  <Navigate to="/" /> : children );
  };

export default PrivateRoute;