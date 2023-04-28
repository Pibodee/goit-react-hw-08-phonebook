const { Suspense } = require("react")
const { default: MainNav } = require("./MainNav/MainNav")
const { Loader } = require("./Loader/Loader")
const { Outlet } = require("react-router-dom")

const Layout = () => {
    return (
        <>
            <MainNav />
            <Suspense fallback={<Loader />}>
                <Outlet/>
            </Suspense>
        </>
    )
}

export default Layout