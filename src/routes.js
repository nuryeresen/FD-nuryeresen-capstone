import Home from "./page/Home";
import SortFilter from "./page/SortFilter";
import Login from "./page/Login";
import About from "./page/About";
import SearchSection from "./page/SearchSection";
import Profile from "./page/Profile";
import NotFound from "./page/NotFound";
import Detail from "./page/Detail";
import Contact from "./page/Contact";
export const routes = [
  {name: "Home", pathname: "/", element: Home, isNav:true},
  {name: "Movies", pathname: "/sort-filter", element: SortFilter, isNav:false},
  {name: "Movies", pathname: "/sort-filter/:type", element: SortFilter, isNav:false},
  {name: "Profile", pathname: "/profile", element: Profile, isNav:true},
  {name: "Login", pathname: "/login", element: Login, isNav:true},
  {name: "Detail", pathname: "/movies/:movieId", element: Detail, isNav:false},
  {name: "About", pathname: "/about", element: About, isNav:true},
  {name: "Search", pathname: "/search", element: SearchSection, isNav:false},
  {name: "NotFound", pathname: "*", element: NotFound, isNav:false},
  {name: "Contact", pathname: "/contact", element: Contact, isNav:false},

]
