import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar: React.FC<{ isHomePage: boolean }> = ({ isHomePage }) => {
  const { data } = useSession();
  console.log(data);
  const router = useRouter();
  const [activeSection, setActiveSection] = useState(router.pathname);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("Guest");

  useEffect(() => {
    setActiveSection(router.pathname);
  }, [router.pathname]);

  return (
    <div className="scroll-smooth">
      <div className="bg-transparent navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <i className="ri-menu-line"></i>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link href="/" className={activeSection === "/" ? "text-primary" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/history" className={activeSection === "/history" ? "text-primary" : ""}>
                  History
                </Link>
              </li>
              {isHomePage && (
                <li>
                  <ScrollLink to="contact" smooth={true} duration={500} className={activeSection === "/contact" ? "text-primary" : ""}>
                    Contact Us
                  </ScrollLink>
                </li>
              )}
            </ul>
          </div>
          <Link href="/" className="text-xl btn btn-ghost">
            <span>
              SEO<span className="text-primary">Bizzagi</span>
            </span>
          </Link>
        </div>
        <div className="justify-center hidden w-full lg:flex">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className={`${activeSection === "/" ? "text-primary" : "text-black"} hover:text-primary transition duration-300`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/history" className={`${activeSection === "/history" || activeSection === "/history/[id]" ? "text-primary" : "text-black"} hover:text-primary transition duration-300`}>
                History
              </Link>
            </li>
            {isHomePage && (
              <li>
                <ScrollLink to="contact" smooth={true} duration={500} className={`${activeSection === "#contact" ? "text-primary" : "text-black"} hover:text-primary transition duration-300 cursor-pointer`}>
                  Contact Us
                </ScrollLink>
              </li>
            )}
          </ul>
        </div>

        <div className="navbar-end">
          {data ? (
            <div className="flex items-center">
              <span>{data.user.name}</span>
              <i className="mr-4 text-2xl ri-user-3-line"></i>
              <button className="mr-4 btn btn-outline outline-transparent" onClick={() => signOut()}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <button className="mr-4 btn btn-outline outline-transparent" onClick={() => signIn()}>
                Login
              </button>
              <a className="text-white btn bg-primary" href="/register">
                Register
              </a>
            </>
          )}
        </div>
      </div>
      {/* Garis di bawah navbar */}
      <div className="h-0.5 bg-primary"></div>
    </div>
  );
};

export default Navbar;
