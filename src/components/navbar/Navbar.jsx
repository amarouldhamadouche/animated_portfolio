import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <div
          style={{flex: 1}}
        >

        </div>
        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100007073805383">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/amar-ould-hamadouche-21b234219/">
            <img src="linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
