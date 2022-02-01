
import React from "react";
import { ThirdButton} from "../styledComponents/Button"
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validateUser } from '../reduxStore/userInit';

const Login = (props) => {
  const navigate = useNavigate()
  const [userName, setUserName] = useState("")
  const dispatch = useDispatch()
  const [password, setPassword] = useState("")
  const { user } = useSelector(state => state)
  const [isLogin, setIsLogin]= useState()
  // NAVİGATE REDUX
  useEffect(() => {
    if (user.userLogin) {
     (navigate("/profile"))
    }
  }, [user,navigate])

 

  return(
  <>
  <div className="d-flex justify-content-center">

  <form className="d-flex justify-content-center">
  <div className="col-sm-4  ">
    <label htmlFor="uname"> Username: </label>
    <input type="text" id="uname" name="name" required size="45" onChange={(e) => setUserName(e.target.value)}
           pattern="[a-z]{4,8}" title="4 to 8 lowercase letters" placeholder="Username"/>
    <span className="validity"></span>
 {/*    <p>Usernames must be lowercase and 4-8 characters in length.</p> */}
    <label htmlFor="uname"> Password: </label>
    <input type="Password" onChange={(e) => setPassword(e.target.value)} id="password" name="name" required size="45"
           pattern="[a-z]{4,8}" title="4 to 8 lowercase letters" placeholder="Password"/>
    <span className="validity"></span>
  </div>
 
  <div>
     <br />
     <br />
     <br />
     <br />
     <br />
    <ThirdButton onClick={(e) => {
      e.preventDefault();
            dispatch(validateUser(userName, password))
          }}> Login </ThirdButton>
  </div>
</form>
</div>
   </>
   )
};

export default Login;
