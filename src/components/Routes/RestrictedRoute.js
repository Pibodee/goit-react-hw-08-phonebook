const { useSelector } = require("react-redux");
const { Navigate } = require("react-router-dom");
const { selectIsLoggedIn } = require("redux/auth/authSelectors")

const RestrictedRoute = ({ component }) => {
    const isLogged = useSelector(selectIsLoggedIn);

    return isLogged?<Navigate to='/contacts' replace/> : component
}

export default RestrictedRoute