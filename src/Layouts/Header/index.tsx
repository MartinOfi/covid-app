import Logo from "../../Assets/Images/descarga.png";
const Header = () => {
  return (
    <nav className="has-background-info has-text-grey h-80px is-flex is-align-items-center is-justify-content-space-between px-5">
      <figure className="image is-64x64">
        <img src={Logo} alt="" className="is-rounded" />
      </figure>
      <input className="input w-50rem" type="text" placeholder="Text input"/>
      <div></div>
    </nav>
  )
};
export default Header;
