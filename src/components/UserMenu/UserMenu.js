const { useSelector, useDispatch } = require("react-redux");
const { logOut } = require("redux/auth/authOperations");
const { selectUser } = require("redux/auth/authSelectors")

const UserMenu = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut)
    }

    return (
        <div>
            <p>Wellcome, {user.name}</p>
            <p>email: {user.email}</p>
            <button type="button" onClick={handleLogOut}>LogOut</button>
        </div>
    )
}

export default UserMenu