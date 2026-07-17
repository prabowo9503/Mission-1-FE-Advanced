import Logo from "../Assets/img/Logo.svg";
import Profile from "../Assets/img/972aaa8cb01f0e1dc620f3f4d3328f6b37392f9a.png";
const NavigationBar = () => {
  return (
  <div className="navbar">
    <div className="navbar-container">
    <div className="logo"><img src={Logo} alt="logo-perusahaan"></img>
    </div>
      <div className="menu-container">
      <ul className="menu-list">
        <li className="menu-list-item active">Series</li>
        <li className="menu-list-item active">Film</li>
        <li className="menu-list-item active">Daftar Saya</li>
      </ul>
      </div>
      <div className="profile-container">
      <img className="profile-picture" src={Profile}alt="">
      </img>
      </div>
    </div>
  </div>
  )
}

export default NavigationBar