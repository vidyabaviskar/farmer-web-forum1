import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

const StickyNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    });
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col lg:flex-row lg:items-center lg:gap-8 gap-3 text-lg font-semibold font-[Poppins] transition-all duration-300">
      <li>
        <a
          href="#about"
          className="text-green-900 hover:text-green-600 transition duration-200 ease-in-out"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#contact"
          className="text-green-900 hover:text-green-600 transition duration-200 ease-in-out"
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="/login"
          className="text-green-900 hover:text-green-600 transition duration-200 ease-in-out"
        >
          Login
        </a>
      </li>
      <li>
        <a
          href="/register"
          className="text-green-900 hover:text-green-600 transition duration-200 ease-in-out"
        >
          Register
        </a>
      </li>
    </ul>
  );

  return (
    <Navbar
      className="sticky top-0 z-50 bg-white shadow-lg max-w-full px-6 py-6 transition-all duration-300"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="flex items-center justify-between">
        <Typography
          variant="h4"
          className="text-green-800 font-bold tracking-wide transition-all duration-300"
        >
          Farmer Forum
        </Typography>

        <div className="hidden lg:block">{navList}</div>

        <IconButton
          variant="text"
          className="h-8 w-8 text-green-800 lg:hidden transition duration-200"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>

      {/* Mobile Nav */}
      <Collapse open={openNav}>
        <div className="mt-4">{navList}</div>
      </Collapse>
    </Navbar>
  );
};

export default StickyNavbar;

