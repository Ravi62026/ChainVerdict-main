import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";
import darkLogo from "../assets/logo-dark.jpeg";
import { NavLink } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";
import { useTheme } from "../context/theme";

const menuItems = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About",
    to: "/about",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { theme } = useTheme();
  const [logo, setLogo] = useState("Logo");

  useEffect(() => {
    if (theme === "dark") {
      setLogo(darkLogo);
    } else {
      setLogo(Logo);
    }
  }, [theme]);

  return (
    <div className="w-full bg-gray-100 shadow-lg dark:shadow-gray-500 dark:shadow-md sticky top-0 z-20 dark:bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img src={logo} alt="" width="50" height="50" />
          </span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                {/* <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `text-md font-semibold text-gray-800 hover:text-amber-900 hover:font-extrabold 
                  ${isActive?"text-amber-900 font-extrabold": "text-gray-800 "}`
                }
              >
                {item.name}
              </NavLink> */}
                <NavLink
                  to={item.to}
                  key={item.name}
                  isActive={(match) => {
                    if (!match) {
                      return false;
                    }
                    return true;
                  }}
                  className={({ isActive }) =>
                    `-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:text-amber-900 ${
                      isActive
                        ? "text-amber-900 font-extrabold"
                        : "text-gray-800 dark:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex items-center justify-between w-[15%]">
          <ThemeBtn />
          <NavLink to={"/wallet"}>
            <button
              type="button"
              className="bg-black dark:bg-white px-3 py-2.5 text-sm font-semibold text-white dark:text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white rounded-xl hover:scale-110 hover:bg-[#333] ease-in-out transition-all duration-300"
            >
              Account
            </button>
          </NavLink>
        </div>
        <div className="lg:hidden">
          {theme === "dark" ? (
            <Menu
              onClick={toggleMenu}
              className="h-6 w-6 cursor-pointer"
              color="white"
            />
          ) : (
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          )}
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-gray-100 dark:bg-black shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img src={logo} alt="" width="200" height="200" />
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 dark:text-white hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <NavLink
                        to={item.to}
                        key={item.name}
                        isActive={(match) => {
                          if (!match) {
                            return false;
                          }
                        }}
                        className={({ isActive }) =>
                          `-m-3 flex items-center rounded-md p-3 text-sm font-semibold ${
                            isActive
                              ? "text-amber-900 font-extrabold"
                              : "text-gray-800 dark:text-white"
                          }`
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}
                    <ThemeBtn />
                    <button
                      type="button"
                      className=" bg-black dark:bg-white px-3 py-2.5 text-sm font-semibold text-white shadow-sm dark:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black rounded-xl hover:scale-110 hover:bg-[#333] ease-in-out transition-all duration-300"
                    >
                      Account
                    </button>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
