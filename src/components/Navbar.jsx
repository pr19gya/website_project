import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTextClick = () => {
    setIsVisible(!isVisible);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-[5rem] flex w-full shadow-2xl top-0 justify-between items-center bg-white px-5 md:px-10">
      <Link to="/">
        <div className="h-full flex items-center">
          <img src="/Screenshot 2024-07-14 190646.png" alt="Logo" className="h-15 w-auto" />
        </div>
      </Link>
      <div className="flex items-center space-x-6 lg:space-x-10 hidden md:flex">
        <div ref={ref} className="relative">
          <span className="cursor-pointer" onClick={handleTextClick}>
            ABOUT
          </span>
          {isVisible && (
            <div className="absolute z-10 mt-2 py-2 px-4 w-[10rem] bg-white shadow-lg rounded-lg">
              <Link to="/about">
                <p className="flex justify-center items-center my-2">About Us</p>
                <hr />
              </Link>
              <Link to="/council3080">
                <p className="flex justify-center items-center my-2">Council 3080</p>
                <hr />
              </Link>
              <Link to="/past-drrs">
                <p className="flex justify-center items-center my-2">Past DRRs</p>
              </Link>
            </div>
          )}
        </div>
        <Link to="/club-project">
          <div className="my-5">CLUB PROJECTS</div>
        </Link>
        <Link to="/calendar">
          <div className="my-5">CALENDAR</div>
        </Link>
        <div onClick={openModal} className="my-5 cursor-pointer">
          SIGN IN
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {menuOpen ? <IoMdClose /> : <IoIosMenu />}
        </button>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex flex-col items-center justify-center md:hidden">
          <div className="bg-white p-8 w-full max-w-xs rounded shadow-lg">
            <div ref={ref} className="relative mb-4">
              <span className="cursor-pointer" onClick={handleTextClick}>
                ABOUT
              </span>
              {isVisible && (
                <div className="absolute z-10 mt-2 py-2 px-4 w-full bg-white shadow-lg rounded-lg">
                  <Link to="/about">
                    <p className="flex justify-center items-center my-2">About Us</p>
                    <hr />
                  </Link>
                  <Link to="/council3080">
                    <p className="flex justify-center items-center my-2">Council 3080</p>
                    <hr />
                  </Link>
                  <Link to="/past-drrs">
                    <p className="flex justify-center items-center my-2">Past DRRs</p>
                  </Link>
                </div>
              )}
            </div>
            <Link to="/club-project">
              <div className="mb-4">CLUB PROJECTS</div>
            </Link>
            <Link to="/calendar">
              <div className="mb-4">CALENDAR</div>
            </Link>
            <div onClick={openModal} className="cursor-pointer mb-4">
              SIGN IN
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-[#E0218A]" onClick={closeModal}></div>
          <div className="bg-white p-8 w-[90%] max-w-[30rem] rounded shadow-lg z-10">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
              <h2 className="text-2xl font-bold text-center">Sign In</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="w-full px-3 py-2 mt-1 text-gray-900 bg-gray-100 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <a href="#" className="font-medium text-black hover:text-black">
                      Forgot your password?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-white bg-black rounded-md hover:bg-black focus:ring-4 focus:ring-black focus:ring-opacity-50"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
