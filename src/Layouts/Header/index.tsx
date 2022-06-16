import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/descarga.png";
const Header = () => {
  return (
    <nav className="has-background-info has-text-grey h-80px is-flex is-align-items-center is-justify-content-space-between px-5" id="nav-bar">
      <Link to="/" className="">
        <figure className="image is-64x64 my-auto ml-6">
          <img src={Logo} alt="" className="is-rounded " />
        </figure>
      </Link>
      <div></div>
    </nav>
  );
};
export default Header;
