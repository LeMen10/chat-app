import Search from "~/pages/Search/Search"
import Home from "~/pages/Home/Home"
import Login from "~/pages/Login/Login"
import Register from "~/pages/Register/Register"

const publicRouter = [
    {path: '/search', component: Search},
    {path: '/login', component: Login, layout: null},
    {path: '/', component: Home, layout: null},
    {path: '/register', component: Register, layout: null},
]

const privateRouter = [

]

export { publicRouter, privateRouter }