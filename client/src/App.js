import Home from "./components/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./components/pages/Single";
import Write from "./components/write/Write";
import Settings from "./components/settings/Settings";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <TopBar/>
        <Routes>
          <Route>
          <Route exact path="/" element={<Home />} />
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
