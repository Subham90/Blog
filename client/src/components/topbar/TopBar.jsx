import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
const { user,dispatch } = useContext(Context);
const PF = "https://blog-backend-ho92.onrender.com/images/"

const handleLogout = () =>{
  dispatch({type: "LOGOUT"});
};


  return (
    <div className="top">
     <div className="topLeft">
     <i className="topIcon fa-brands fa-twitter"></i>
     <i className="topIcon fa-brands fa-instagram"></i>
     <i className="topIcon fa-brands fa-facebook"></i>
     </div>
    <div className="topCenter">
      <ul className="topList">
        <li className="TopListitem">
          <Link className="link" to="/">HOME</Link>
          </li>
        <li className="TopListitem"><Link className="link" to="/about">ABOUT</Link></li>
        <li className="TopListitem"><Link className="link" to="/contact">CONTACT</Link></li>
        <li className="TopListitem"><Link className="link" to="/write">WRITE</Link></li>
        <li className="TopListitem" onClick={handleLogout} >
          {user && "LOGOUT"}
        </li>
      </ul>
    </div>
    <div className="topRight">
      {user ? (
        <Link to="/settings">
      <img className="topImg" src={PF+user.profilePic} alt=""></img>
      </Link>
      ) : (
          <ul className="topList">
          <li className="TopListitem">
          <Link className="link" to="/login">LOGIN</Link>
          </li>
          <li className="TopListitem">
          <Link className="link" to="/register">REGISTER</Link>
          </li>
          </ul>
        )}
     <i className="rightIcon fa-solid fa-magnifying-glass"></i>
     </div>
    </div>
  );
}
