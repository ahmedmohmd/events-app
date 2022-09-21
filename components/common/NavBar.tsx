//* Imports
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import NavLink from "../core/NavLink";

//* NavBar Component
const NavBar: FC = () => {
  const { pathname } = useRouter();

  return (
    <div
      className={
        "navbar duration-100  w-full " +
        (pathname === "/"
          ? "bg-transparent absolute top-0 z-20"
          : "bg-orange-600/90 block")
      }
    >
      <header className="text-gray-600 body-font">
        <div className="container flex items-center justify-between px-4 py-3 mx-auto">
          <Link href="/">
            <a className="inline-flex items-center text-lg font-semibold gap-x-2">
              <img
                src="/images/logo.png"
                className="w-10 h-10"
                alt="Website Logo"
              />
              <span className="text-xl font-bold text-white w-52">Events</span>
            </a>
          </Link>
          <nav className="flex items-center justify-center gap-3 text-base md:ml-auto">
            <NavLink
              styleName="p-[13px] font-semibold duration-300 rounded-xl bg-transparent text-white hover:bg-slate-800/90"
              href={"/events"}
              activePath={"/events"}
            >
              Events
            </NavLink>
            <a
              href="https://github.com/ahmedmohmd/ytl-downloader"
              target="_blank"
              className="items-center justify-center hidden pt-3 border-t-2 md:flex project-link sm:pt-0 sm:pl-3 sm:border-l-2 sm:border-t-0 border-slate-200/50"
            >
              <div className="p-3 duration-300 rounded-full hover:bg-slate-800/90">
                <img src="/images/github-icon.svg" className="fil" alt="" />
              </div>
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
