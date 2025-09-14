import navLogo from "/images/nav-logo.svg";
import menuIcon from "/images/menu.svg";

const NavBar = () => {
  return (
    <nav>
      <img src={navLogo} alt="Logo" className="scale-90" />
      <img src={menuIcon} alt="Menu" className="w-10" />
    </nav>
  );
};

export default NavBar;
