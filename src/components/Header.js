import recipe_logo4 from "../assets/images/recipe_logo4.png";
import "./Header.css";
import NavBar from "./NavBar";

const Header = (handleSearch) => {
  return (
    <div className="header">
      <a href="/">
        <img src={recipe_logo4} alt="Logo" className="header-image" />
      </a>
      <NavBar handleSearch={handleSearch} />
    </div>
  );
};

export default Header;
