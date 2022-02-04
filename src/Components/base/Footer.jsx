
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import {BiLogIn} from "react-icons/bi"
import {FaHome} from "react-icons/fa"
import {SiAboutdotme} from "react-icons/si"
import {CgProfile} from "react-icons/cg"
const Footer = (props) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`py-5 ${theme.backgroundColor} ${theme.color}`}>
      <div className="container ">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
         
          <small className="col-md-4 mb-0 text-muted">
            &copy; 2022 Capstone Project/ Şahinde Nur Yereşen
          
          <h4 className="nav-item m-3">
              <Link
                to="/about"
                className="nav-Link text-decoration-none text-danger"
              >
                <h3><SiAboutdotme>About</SiAboutdotme></h3>
              </Link>
            </h4>
</small> 
          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item m-3">
              <Link
                to="/"
                className="nav-Link  text-decoration-none text-danger "
              >
                <h5><FaHome>Home</FaHome> </h5>
              </Link>
            </li>

            <li className="nav-item m-3">
              <Link
                to="/login"
                className="nav-Link text-decoration-none text-danger "
              >
                <h5><BiLogIn>Login</BiLogIn></h5>
              </Link>
            </li>
            <li className="nav-item m-3">
              <Link
                to="/profile"
                className="nav-Link text-decoration-none text-danger"
              >
                <h5><CgProfile>Profile</CgProfile></h5>
              </Link>
            </li>
            
           
          </ul>
        </footer>
      </div>
      </div>
    </>
  );
};

export default Footer;
