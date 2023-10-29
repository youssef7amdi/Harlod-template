import Logo from "../../reusable-components/Logo";
import NavLinks from "./NavLinks";
import Login from "./Login";

import "./navbar.css";
import { useState } from "react";
import SmallNav from "./SmallNav";

function Navbar() {
  const [isShow, setIsShow] = useState(false);

  function handleShow() {
    setIsShow((prev) => !prev);
  }

  return (
    <nav className="navbar">
      <SmallNav isShow={isShow} onShow={handleShow} />
      <Logo />
      <NavLinks isShow={isShow} setIsShow={setIsShow} />
      <Login />
    </nav>
  );
}

export default Navbar;
