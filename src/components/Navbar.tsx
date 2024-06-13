import {
  FaThreads,
  FaHouse,
  FaRegHeart,
  FaRegUser,
  FaGear,
  FaRegSquarePlus,
} from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import useMediaQuery from "../hooks/useMediaQuery";

// Define the links array
const links = [
  {
    name: "Home",
    element: FaHouse,
    href: "/",
  },
  {
    name: "Search",
    element: FaSearch,
    href: "/search",
  },
  {
    name: "AddPost",
    element: FaRegSquarePlus,
    href: "Add",
    mobileOnly: true,
  },
  {
    name: "Favorites",
    element: FaRegHeart,
    href: "/favorites",
  },
  {
    name: "Profile",
    element: FaRegUser,
    href: "/profile",
  },
];

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      <aside className="fixed hidden md:block top-0 left-0 h-screen">
        <nav className="flex justify-between flex-col h-full px-2 py-8">
          <div className="p-5 text-3xl hover:text-white text-gray-400 cursor-pointer transition-colors duration-300">
            <FaThreads />
          </div>

          <div>
            <ul className="flex flex-col gap-2 text-gray-400">
              {links.map((link, index) => {
                const Icon = link.element;
                if (link.mobileOnly && !isMobile) return null;
                return (
                  <Link to={link.href} key={index}>
                    <li className="p-5 text-3xl hover:text-white transition-colors duration-300 cursor-pointer hover:bg-muted rounded-lg">
                      <Icon />
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>

          <div className="p-5 text-3xl hover:text-white text-gray-400 cursor-pointer">
            <FaGear />
          </div>
        </nav>
      </aside>

      <nav className="flex  sticky md:hidden">
        <div className="p-5 text-3xl hover:text-white text-gray-400 cursor-pointer transition-colors duration-300">
          <FaThreads />
        </div>
        <ul className="flex fixed bottom-0 left-0 w-screen justify-between gap-2 text-gray-400 bg-card backdrop-blur-lg border-t">
          {links.map((link, index) => {
            const Icon = link.element;

            return (
              <Link to={link.href} key={index}>
                <li className="p-5 text-3xl hover:text-white transition-colors duration-300 cursor-pointer hover:bg-muted rounded-lg">
                  <Icon />
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
