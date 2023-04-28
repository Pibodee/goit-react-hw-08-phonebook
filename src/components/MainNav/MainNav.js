import AuthNav from "components/AuthNav/AuthNav"
import Navigation from "components/Navigation/Navigation"
import UserMenu from "components/UserMenu/UserMenu"
import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "redux/auth/authSelectors"

const MainNav = () => {
    const isLogged = useSelector(selectIsLoggedIn)
    return (
        <header>
            <div>
                <Navigation />
                {isLogged ? <UserMenu/> : <AuthNav/>}
            </div>
        </header>
    )
}

export default MainNav