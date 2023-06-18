import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitlessm">Welcome to Spark</span>
        <span className="headerTitlesLg">Blogs</span>
      </div>
      <img className="Headerimage"
      src="https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="" />
    </div>
  );
}
