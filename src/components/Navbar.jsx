import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import lightLogo from "../assets/light-logo-2.png";
import darkLogo from "../assets/dark-logo-2.png";

function Navbar() {
  const [darkTheme, setDarkTheme] = useState(JSON.parse(localStorage.getItem("dark")));
  const location = useLocation();

  const hiddenRoutes = ["/signin", "/signup", "/reset/password"];

  const handleChange = () => {
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    localStorage.setItem("dark", darkTheme);
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("dark"),
    );
  }, [darkTheme]);


  if (hiddenRoutes.includes(location.pathname)) {
    return null;
  } else {
    return (
      <nav className="flex justify-between items-center p-[10px] px-[25px]">
        <Link to="/">
          <div className="flex justify-center items-center gap-[5px]">
            <img
              className="h-[25px] px-2"
              src={darkTheme ? darkLogo : lightLogo}
              alt=""
            />
            <h1 className="font-bold text-[22px] text-(--text)">
              <span className="text-(--primary)">Infra</span>
              Ledger
            </h1>
          </div>
        </Link>
        <ul className="flex gap-14 text-(--text)">
          <Link to="/features">
            <li className="px-[15px] py-1.75 cursor-pointer">Features</li>
          </Link>
          <li className="px-[15px] py-[7px] cursor-pointer">About</li>
          <li className="px-[15px] py-[7px] cursor-pointer">Demo</li>
          <li className="px-3.75 py-1.75 cursor-pointer">Contact</li>
          <button
            className="bg-(--static-text-light) text-(--static-text-black) p-[10px] rounded-[50%] flex justify-center items-center cursor-pointer"
            onClick={handleChange}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-2V4a8 8 0 1 1 0 16"
              />
            </svg>
          </button>
        </ul>
        <Link to="/signin">
          <button className="text-(--text) px-[20px] py-[7px] rounded-[5px] text-white bg-(--primary) cursor-pointer">
            Sign in
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
