import { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import darkLogo from "../assets/logo-dark.jpeg";
import { Link } from "react-router-dom";
import { useTheme } from "../context/theme";

export function Footer() {
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
    <section className="relative overflow-hidden py-10 bg-gray-100 dark:bg-black">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <span>
                  <img src={logo} alt="" width="200" height="200" />
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-100">
                  &copy; Copyright 2024. All Rights Reserved by ChainVerdict.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500 dark:text-gray-50">
                Company
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 dark:text-gray-100 dark:hover:text-amber-900 hover:text-amber-900   hover:font-extrabold"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 dark:text-gray-100 hover:text-amber-900 dark:hover:text-amber-900  hover:font-extrabold"
                    href="#"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 dark:text-gray-100 hover:text-amber-900 dark:hover:text-amber-900  hover:font-extrabold"
                    href="#"
                  >
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a
                    className=" text-base font-medium text-gray-900 dark:text-gray-100 hover:text-amber-900 dark:hover:text-amber-900  hover:font-extrabold"
                    href="#"
                  >
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500 dark:text-gray-50">
                Support
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 dark:text-gray-100  hover:text-amber-900 hover:font-extrabold dark:hover:text-amber-900 "
                    href="#"
                  >
                    Account
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 dark:text-gray-100  hover:text-amber-900 dark:hover:text-amber-900 hover:font-extrabold"
                    href="#"
                  >
                    Help
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 dark:text-gray-100  hover:text-amber-900 hover:font-extrabold dark:hover:text-amber-900"
                    href="#"
                  >
                    <Link to="/contact">Contact Us</Link>
                  </a>
                </li>
                <li>
                  <a
                    className=" text-base font-medium text-gray-900 dark:text-gray-100  hover:text-amber-900 hover:font-extrabold dark:hover:text-amber-900"
                    href="#"
                  >
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500 dark:text-gray-50">
                Legals
              </h3>
              <ul>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-amber-900 hover:font-extrabold dark:text-gray-100 dark:hover:text-amber-900"
                    href="#"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-amber-900 hover:font-extrabold dark:text-gray-100 dark:hover:text-amber-900"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    className=" text-base font-medium text-gray-900 hover:text-amber-900 hover:font-extrabold dark:text-gray-100 dark:hover:text-amber-900"
                    href="#"
                  >
                    Licensing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
