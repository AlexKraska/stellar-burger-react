import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

export const ProtectedRoute = ({ children, anonymous = false }) => {
    const location = useLocation();
    const loggedOrNot = (store) => store.userData.isLoggedIn;
    const isLoggedIn = useSelector(loggedOrNot);
    const from = location.state?.from || '/';

    // Если требуется авторизация, а пользователь не авторизован...
    if (!anonymous && !isLoggedIn) {
        // ...то отправляем его на страницу логин
        return <Navigate to="/login" state={{ from: location }} />;
    }
    // Если разрешен неавторизованный доступ, а пользователь авторизован...
    if (anonymous && isLoggedIn) {
        // ...то отправляем его на предыдущую страницу
        return <Navigate to={from} />;
    }
    // если все ок то рендерим внутреннее содержимое
    return children;
};
