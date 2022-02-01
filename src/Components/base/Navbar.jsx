import React from "react";
import { Link } from "react-router-dom";
import ChangeThemeButton from "./ChangeThemeButton"
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";
import { routes } from "../../routes";
import { SecondaryButton} from "../../styledComponents/Button";
import { useSelector } from 'react-redux';




const Navbar = (props) => {

  const { theme } = useContext(ThemeContext);
  const context = useContext(ThemeContext);
  const {user} = useSelector(state => state)
  
  console.log(context);
  const openDropdown = () => {
    document.getElementById("movies-dropdown").classList.add("d-block")
}
const closeDropdown = () => {
    document.getElementById("movies-dropdown").classList.remove("d-block")
}


  return (
    <>
     <div className="col-sm-12 d-flex justify-content-end">
     <div className={`navbar navbar-expand-lg ${theme.navbar}`}>
      <div className=" d-flex justify-content-center m-4">
 
       <ChangeThemeButton /> 
    
  <div className='btn-group px-3 text-muted' onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
  <Link to="/sort-filter" >
     <SecondaryButton><h5 className=" d-flex justify-content-center">Movies</h5></SecondaryButton>
     </Link>
    <ul id="movies-dropdown" className="dropdown-menu position-absolute top-100">
    <li><Link className="dropdown-item" to="sort-filter/popular">Popular</Link></li>
    <li><Link className="dropdown-item" to="sort-filter/top-rated">Top Rated</Link></li>
    </ul>

    <div className="container">
  <div className="row">
   <div className="col-sm-6">
    <div className="collapse navbar-collapse list-unstyled " >
      
        { routes.filter(item => item.isNav && (item.isLogin === user.userLogin)).map((item, index) => <li className="pt-3 px-3 " key={index}><Link to={item.pathname} className="text-decoration-none text-danger "><h3>{item.name}</h3></Link></li>)}      
        </div>
        </div>
        </div>
  </div>
  </div>
  </div>
            </div>
      </div>
    </>
  );
};
export default Navbar;     
                   
                        
       
        
     
    



       
        
        
     
      