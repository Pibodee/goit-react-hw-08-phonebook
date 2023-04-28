const { useSelector } = require("react-redux")
const { NavLink } = require("react-router-dom")
const { selectIsLoggedIn } = require("redux/auth/authSelectors")


const Navigation = () => {
    const isLogged = useSelector(selectIsLoggedIn)

    return (
        <nav>
            <div>
                <NavLink to='/'>Home</NavLink>
                <p>Phonebook</p>
                {isLogged && <NavLink to='/contacts'>Contacts</NavLink>}
            </div>
        </nav>
    )
}

export default Navigation