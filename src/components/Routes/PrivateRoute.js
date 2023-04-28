const { useSelector } = require("react-redux");
const { Navigate } = require("react-router-dom");
const { selectIsLoggedIn } = require("redux/auth/authSelectors")

const PrivateRoute = ({component}) => {
    const isLogged = useSelector(selectIsLoggedIn);

    return isLogged? component : <Navigate to='/login' replace/>
}

export default PrivateRoute