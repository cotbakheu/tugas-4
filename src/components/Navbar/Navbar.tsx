import { useEffect, useState } from "react";
import { Link } from "react-router";

function Navbar() {
  const [navOpacity, setNavOpacity] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const heroOffSet = 0.8 * window.screen.height;
      if (window.scrollY > heroOffSet) {
        setNavOpacity((window.scrollY - heroOffSet) / 50);
      } else {
        setNavOpacity(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      style={{ backgroundColor: `rgba(199, 208, 217, ${navOpacity})` }}
      className="py-6 px-20 bg-transparent flex fixed left-0 top-0 w-full z-50"
    >
      <Link to={"/"}>@AyushBarnwall</Link>
      <ul className="flex gap-10 justify-end w-full">
        <li>
          <a href={"/#about"}>About</a>
        </li>
        <li>
          <a href={"/#work"}>Work</a>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
