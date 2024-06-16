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
import useAuth from "../hooks/useAuth";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";
import { useTheme } from "./theme-provider";

export default function Navbar() {
  const { auth, setAuth } = useAuth();

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
      href: "/activity",
    },
    {
      name: "Profile",
      element: FaRegUser,
      href: `/${auth?.username}`,
    },
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");

  const { theme, setTheme } = useTheme();

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
            <Popover>
              <PopoverTrigger>
                <FaGear />
              </PopoverTrigger>
              <PopoverContent side="right">
                <div className="flex items-center space-x-2">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <Switch
                    id="dark-mode"
                    checked={theme === "dark"}
                    onCheckedChange={(e) => {
                      if (e) {
                        setTheme("dark");
                      } else {
                        setTheme("light");
                      }
                    }}
                  />
                </div>
                <Button
                  variant={"outline"}
                  className="w-full mt-10"
                  onClick={() => {
                    sessionStorage.clear();
                    setAuth(null);
                  }}
                >
                  Log Out
                </Button>
              </PopoverContent>
            </Popover>
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
