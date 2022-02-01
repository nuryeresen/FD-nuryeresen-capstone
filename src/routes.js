import Home from "./page/Home";
import SortFilter from "./page/SortFilter";
import Login from "./page/Login";
import About from "./page/About";
import SearchSection from "./page/SearchSection";
import Profile from "./page/Profile";
import NotFound from "./page/NotFound";
import Detail from "./page/Detail";

export const routes = [
  {name: "Home", pathname: "/", element: Home, isNav:true, isLogin:true},
  {name: "Movies", pathname: "/sort-filter", element: SortFilter, isNav:false, isLogin:true},
  {name: "Movies", pathname: "/sort-filter/:type", element: SortFilter, isNav:false, isLogin:true},
  {name: "Profile", pathname: "/profile", element: Profile, isNav:true, isLogin:true},
  {name: "Login", pathname: "/login", element: Login, isNav:true , isLogin:false},
  {name: "Detail", pathname: "/movies/:movieId", element: Detail, isNav:false, isLogin:false},
  {name: "About", pathname: "/about", element: About, isNav:true, isLogin: true},
  {name: "Search", pathname: "/search", element: SearchSection, isNav:false , isLogin: true},
  {name: "NotFound", pathname: "*", element: NotFound, isNav:false, isLogin: true},


]
