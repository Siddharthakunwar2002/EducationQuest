import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-primary">
            CodeLearn
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['/', '/courses', '/about'].map((path, index) => (
              <NavLink
                key={index}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-medium underline"
                    : "text-dark hover:text-primary"
                }
              >
                {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
              </NavLink>
            ))}
            <NavLink to="/login" className="text-dark hover:text-primary">Login</NavLink>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-dark focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden`}
        onClick={toggleMenu}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <div className="flex flex-col items-start p-6 space-y-4">
          {['/', '/courses', '/about', '/login', '/register'].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "block text-primary font-medium underline"
                  : "block text-dark hover:text-primary"
              }
              onClick={toggleMenu}
            >
              {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
