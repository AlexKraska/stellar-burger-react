import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children }) => {
    const location = useLocation();
    const loggedOrNot = (store) => store.userData.isLoggedIn;
    const isLoggedIn = useSelector(loggedOrNot);

    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location }} />
    }

    return children;
};
