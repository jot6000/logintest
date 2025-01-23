import { NavLink, Outlet, useNavigate } from "react-router";

export default function WithNavbar(props) {
  let navigate = useNavigate();

  const logout=()=>{
    props.setuserAccount(null);
    navigate("/");
  }

  return(
    <div className="page-with-navbar">
      <nav className="navbar">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <img src={"/images/icons/home_icon.png"} alt="home icon"/>
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/myaccount"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <img src={"/images/icons/profile_icon.png"} alt="profile icon"/>
          <p>My Account</p>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          <img src={"/images/icons/about_icon.png"} alt="about icon"/>
          <p>About</p>
        </NavLink>
        <button onClick={logout} className="sign-out">
          <img src={"images/icons/log_out_icon.png"} alt="Sign Out"/>
          <span>Sign Out</span>
        </button>
      </nav>
      <Outlet />
    </div>
  );
}
