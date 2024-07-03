import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import switcher from "../../public/switcher.svg"
// ToggleTheme 
export default function HeaderNav({toggleTheme}) {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (isOpen && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Función para manejar el scroll
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen, prevScrollPos]);

  const menuRef = useRef(null);
  return (
    // Aqui empieza el navabar
    <nav
      className={`fixed -top-7 -left-16 w-full  transition z-50 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="top-0 z-10 h-16 pt-6 sticky">
        <div className="sm:px-8 top-[var(--header-top, theme(spacing.6))] w-full">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="relative flex gap-4 justify-center">
                  {" "}
                  {/* Add justify-center here */}
                  <div className="flex flex-1"></div>
                  <div className="flex flex-1 justify-end md:justify-center">
                    <div
                      ref={menuRef}
                      className="btn-group dropstart sm:block md:hidden"
                      data-headlessui-state=""
                    >
                      <button
                        onClick={toggleMenu}
                        className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                        type="button"
                        aria-expanded="false"
                        data-headlessui-state=""
                        id="headlessui-popover-button-:Rbmiqja:"
                      >
                        Menu
                        <svg
                          viewBox="0 0 8 6"
                          aria-hidden="true"
                          className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
                        >
                          <path
                            d="M1.75 1.75 4 4.25l2.25-2.5"
                            fill="none"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      {isOpen && (
                        <div className="absolute  top-8 right-10 mt-2 w-60 rounded-md shadow-lg">
                          <i
                            className="bi bi-x-square-fill absolute top-0 right-2 text-red-500"
                            onClick={toggleMenu}
                          ></i>
                          <div className="py-1 rounded-md bg-white shadow-xs">
                            <ul>
                              <li>
                                <a
                                  href="/"
                                  className="block mt-4 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  Home
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/about"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  About Me
                                </a>
                              </li>
                              <li>
                                <a
                                  href="https://guillermocopello.blogspot.com/"
                                  target="_blank"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  Blog
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/works"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  Works
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/contact"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  Contact Us
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/privacity"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  Privacy
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/security"
                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                >
                                  Secury
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>

                    <nav className="pointer-events-auto hidden md:block">
                      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        <li>
                          <Link
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/about"
                          >
                            About
                          </Link>
                        </li>
                        <li>
                          <a
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="https://guillermocopello.blogspot.com/"
                            target="_blank"
                          >
                            Blog
                          </a>
                        </li>
                        <li>
                          <Link
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/works"
                          >
                            Works
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
                            href="/contact"
                          >
                            Contact
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                   <div className="flex justify-end md:flex-1">
                   <div className="pointer-events-auto">
                      <button
                        type="button"
                        aria-label="Switch to dark theme"
                        className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
                        onClick={toggleTheme}
                      >

                        <Image
                          className="mask mask-circle icon"
                          alt="it's a switcher icon for change the de theme"
                          src={switcher}
                        />
                      </button>
                    </div>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
