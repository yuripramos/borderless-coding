import { useState } from "react";

interface MenuItem {
  label: string;
  href: string;
}

interface HamburgerMenuProps {
  menuItems: MenuItem[];
}

const HamburgerMenu = ({ menuItems }: HamburgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative text-xl">
      <button
        className="fixed right-4 top-4 z-10 cursor-pointer lg:hidden"
        onClick={handleToggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className={`h-6 w-6 fill-current ${isOpen ? "hidden" : ""}`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"
          />
        </svg>
        <svg
          className={`h-6 w-6 fill-current ${isOpen ? "" : "hidden"}`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 6h14v2H5V6zm0 5h14v2H5v-2zm0 5h14v2H5v-2z"
          />
        </svg>
      </button>
      {isOpen && (
        <div
          className="fixed left-0 top-0 z-20 h-full w-full bg-white bg-opacity-90"
          onClick={handleCloseMenu}
        >
          <nav className="flex h-full flex-col items-center justify-center">
            <ul className="space-y-4">
              {menuItems.map((item: MenuItem, index: number) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block px-3 py-2 text-gray-400 transition duration-150 ease-in-out hover:text-blue-500"
                    onClick={handleCloseMenu}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
