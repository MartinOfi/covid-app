import Logo from "../../Assets/Images/descarga.png";
const Header = () => {
  return (
    <nav className="has-background-info has-text-grey h-80px is-flex is-align-items-center px-5">
      <figure className="image is-64x64">
        <img src={Logo} alt="" className="is-rounded" />
      </figure>
    </nav>
  )
};
export default Header;
