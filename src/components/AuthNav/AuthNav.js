const { NavLink } = require("react-router-dom")

const AuthNav = () => {
    return (
      <div>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/login'>LogIn</NavLink>
      </div>
    );
}

export default AuthNav