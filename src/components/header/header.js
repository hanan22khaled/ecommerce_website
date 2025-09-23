import { useState, useEffect, useRef } from "react";
import "./header.css";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
function Header() {
  const [active, setActive] = useState("HOME");
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const links = [
    // { name: "SHOP", href: "/shop" }
    // { name: "CONTACT", href: "/contact" }
    { name: "HOME", dropdown: true , href:"/" },
    { name: "SHOP" , href:"/Shop"},
    { name: "MEATS & SEAFOOD", icon: "fa-shrimp" },
    { name: "BAKERY", icon: "fa-cookie-bite" },
    { name: "BEVERAGES", icon: "fa-mug-saucer" },
    { name: "BLOG" , href:"/blog" },
    { name: "CONTACT" , href:"/Contact" },
  ];

  // إغلاق المينو عند الضغط خارج
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header-sec">
      {/* ////////////////////////// first part /////////////////////////////// */}
      <div className="first-part">
        <p>
          Due to current circumstances, there may be slight delays in order
          processing
        </p>
      </div>

      {/* ////////////////////////// second part /////////////////////////////// */}
      <div className="sec-part flex justify-between items-center px-4 py-1">
        <div className="left-sec-part">
          <a href="/about">About Us</a>
          <a href="#">Compare</a>
          <a href="#">Wishlist</a>
        </div>
        <div className="right-sec-part flex items-center space-x-4">
          <span>
            <i className="fa-solid fa-user-shield"></i> 100% Secure delivery without contacting the courier
          </span>
          <span className="inline-block h-4 w-px bg-gray-400"></span>
          <span>
            Need help ? Call Us :{" "}
            <span style={{ color: "#35AFA0", fontWeight: "bolder" }}>+020100</span>
          </span>
          <span className="inline-block h-6 w-px bg-gray-400"></span>

          {/* Dropdown for Languages */}
          <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex items-center justify-center gap-x-1 bg-white text-xs font-medium text-gray-900 hover:bg-gray-100 border-none outline-none btn-menu">
              <img src="https://flagcdn.com/w40/us.png" alt="USA" className=" w-5" /> EN
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </MenuButton>
            <MenuItems className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg outline outline-1 outline-black/5">
              <div className="py-1">
                <MenuItem>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700">
                    <img src="https://flagcdn.com/w40/sa.png" alt="Saudi Arabia" className=" w-5" /> AR
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700">
                    <img src="https://flagcdn.com/w40/fr.png" alt="France" className=" w-5" /> FR
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700">
                    <img src="https://flagcdn.com/w40/de.png" alt="Germany" className=" w-5" /> DE
                  </a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

          {/* Dropdown for Currency */}
          <Menu as="div" className="relative inline-block">
            <MenuButton className="inline-flex items-center justify-center gap-x-1 bg-white text-xs font-medium text-gray-900 hover:bg-gray-100 border-none outline-none btn-menu btn-menu2">
              USD
              <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
            </MenuButton>
            <MenuItems className="absolute right-0 z-10 mt-2 w-35 origin-top-right rounded-md bg-white shadow-lg outline outline-1 outline-black/5">
              <div className="py-1">
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">SAR</a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700">URE</a>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        </div>
      </div>
      <hr />

      {/* ////////////////////////// third part /////////////////////////////// */}
      <div className="third-part flex items-center justify-center gap-3 w-full h-[70px] relative px-4">
        <img
          src="/images/market-logo.png"
          alt="logo"
          className="w-18 h-12 object-contain"
        />
        <div className="relative w-1/2 search">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-black-400 ">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            placeholder="Search for products"
            className="w-full pl-10 pr-4 py-1 text-sm border bg-gray-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        <span className="user-icon w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 circle-round">
          <i className="fa-regular fa-user"></i>
        </span>

        <span className="price">$ 0.00</span>

        <a
          href="#"
          className="w-8 h-8 flex items-center justify-center rounded-full text-red-500 bg-red-50 border border-red-500 circle-round"
        >
          <i className="fa-solid fa-bag-shopping"></i>
        </a>

        {/* Hamburger for mobile */}
        <button
          ref={hamburgerRef}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="max-[890px]:block hidden text-gray-700 focus:outline-none ml-2"
        >
          <i className={`fa-solid ${mobileOpen ? "fa-xmark" : "fa-bars"} text-xl`}></i>
        </button>

        {/* Mobile menu under button */}
        {mobileOpen && (
          <div
            ref={menuRef}
            className="absolute top-14 right-3 w-52 bg-white shadow-lg flex flex-col p-3 gap-2 z-20 rounded-lg"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(active === link.name ? null : link.name)}
                className={`text-left px-3 py-2 text-sm rounded-lg ${
                  active === link.name
                    ? "bg-green-100 text-green-700"
                    : "text-black hover:text-green-700"
                }`}
              >
                {link.icon && <i className={`fa-solid ${link.icon} mr-2`}></i>}
                {link.name}
              </a>
            ))}
            <button className="mt-3 px-1 py-2 rounded-lg bg-[#35AFA0] text-white text-sm">
              <i className="fa-regular fa-user mr-2"></i>User Account
            </button>
          </div>
        )}
      </div>

      {/* ////////////////////////// fourth part /////////////////////////////// */}
      <div className="fourth-part flex items-center justify-between w-full px-52 py-2 shadow-xl">
        {/* Left: All Categories */}
        <Menu as="div" className="relative inline-block hidden min-[891px]:block">
          <MenuButton className="inline-flex items-center justify-center gap-x-1 px-4 py-2 text-xs font-medium text-white bg-[#35AFA0] rounded-2xl border-none outline-none">
            <i className="fa-solid fa-bars"></i> ALL CATEGORIES
            <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-white" />
          </MenuButton>
          <MenuItems className="absolute z-10 mt-2 w-40 origin-top-left rounded-md bg-white shadow-lg outline outline-1 outline-black/5">
            <div className="py-1">
              <MenuItem>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  link1
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  link2
                </a>
              </MenuItem>
              <MenuItem>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                  link3
                </a>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>

        {/* Right: Desktop Links */}
        <div className="hidden min-[891px]:flex items-center gap-3">
          {links.map((link) =>
            link.dropdown ? (
              <Menu as="div" key={link.name} className="relative inline-block">
                <MenuButton
                  onClick={() =>
                    setActive(active === link.name ? null : link.name)
                  }
                  className={`inline-flex items-center justify-center gap-x-1 px-3 py-1 text-xs font-medium rounded-3xl outline-none ${
                    active === link.name
                      ? "bg-green-100 text-green-700"
                      : "text-black hover:text-green-700"
                  }`}
                >
                  {link.name}
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-4 text-gray-500"
                  />
                </MenuButton>
                <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg outline outline-1 outline-black/5">
                  <div className="py-1">
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                        Link 1
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                        Link 2
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                        Link 3
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            ) : (
              <button
                key={link.name}
                onClick={() =>
                  setActive(active === link.name ? null : link.name)
                }
                className={`inline-flex items-center gap-x-1 px-3 py-1 text-xs font-medium rounded-3xl outline-none ${
                  active === link.name
                    ? "bg-green-100 text-green-700"
                    : "text-black hover:text-green-700"
                }`}
              >
                {link.icon && <i className={`fa-solid ${link.icon}`}></i>}
                {link.name}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
