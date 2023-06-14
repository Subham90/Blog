import "./sidebar.css"
import { useEffect,useState } from "react";
import axios from "axios"; 
import { Link } from "react-router-dom";


export default function Sidebar() {

  const[cats,setCats] = useState([]);
  
  useEffect(() =>{
   const getCats = async () => {
    const res = await axios.get("/categories");
    setCats(res.data);
   };
   getCats();
  },
  []);


  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://cdn.pixabay.com/photo/2018/05/04/23/31/grass-3375344_960_720.jpg" alt="" width="400" height="300"></img>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quod cumque, dolorem vero assumenda voluptatem! Quod nisi necessitatibus non debitis enim nihil natus, illo totam accusantium ab laudantium, fuga dolore.</p>
      </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            {cats.map((c) => (
              <Link to={`/?cat=$(c.name)`} className="link">
              <li className="sidebarListItem">{c.name}</li>
              </Link>
            ))}
        </ul>
    </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
         <div className="sidebarSocial">
         <i className="sideBarIcon fa-brands fa-twitter"></i>
         <i className="sideBarIcon fa-brands fa-instagram"></i>
         <i className="sideBarIcon fa-brands fa-facebook"></i>
         </div>
      </div>
    </div>
  )
}
