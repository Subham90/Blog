import Home from "./components/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./components/pages/Single";
import Write from "./components/write/Write";
import Settings from "./components/settings/Settings";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Contact from "./components/contact/Contact";
import About from './components/about/About';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <TopBar/>
        <Routes>
          <Route>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={user ? <Home/> :<Register />} />
          <Route path="/login" element={user ? <Home/> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Register/>} />
          <Route path="/settings" element={user ?<Settings /> : <Register/>} />
          <Route path="/post/:postID" element={<Single />} />
          </Route>
        </Routes>
    </Router>
  );
}
export default App;
