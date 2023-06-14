import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.status });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
        <span className="loginTitle">Login</span>
      <form className="loginform" onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" className="loginInput" placeholder="Enter your Username"
        ref={userRef}
        />
        <label>Password</label>
        <input type="password" className="loginInput" placeholder="Enter your password"
        ref={passwordRef}
        />
        <button className="loginbutton" type="submit" disabled={isFetching}>Login</button>
      </form>
      <button className="Registerbutton">
      <Link className="link" to="/register">Register</Link>
      </button>
    </div>
  );
}
