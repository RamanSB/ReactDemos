import "../assets/styles/header.css";

function Header() {
  return (
    <div className="header">
      <button className="menu-button">
        <i class="fa-solid fa-bars"></i>
      </button>
      <button className="header-button">Home</button>
      <button className="header-button">Risks</button>
      <button className="header-button">Network</button>
      <button className="header-button">?</button>
    </div>
  );
}

export default Header;
