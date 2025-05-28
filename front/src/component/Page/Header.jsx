import React, { useState, useEffect } from 'react';
import { Disclosure } from '@headlessui/react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/Images/logo.jpg';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Disclosure
      as="nav"
      className={`bg-blue-950 text-white px-2 fixed w-screen z-50 transition-transform duration-300 ${showHeader ? 'transform translate-y-0' : 'transform -translate-y-full'}`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div className="relative flex h-24 items-center justify-evenly">
              <div className="flex-1 flex items-center justify-between md:items-stretch md:justify-start">
                <div className="flex-shrink-0">
                  <a href="/">
                    <img src={logo} alt="Logo" className="h-16 w-auto border-2 border-white" />
                  </a>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <FaTimes className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="hidden lg:ml-6 lg:flex lg:space-x-8 items-center">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        isActive ? 'bg-white text-red-600' : 'text-white hover:bg-gray-100 hover:text-red-500',
                        'rounded-md px-3 py-2 text-base font-serif font-medium'
                      )
                    }
                    aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden w-full bg-blue-950">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={NavLink}
                  to={item.href}
                  className={({ isActive }) =>
                    classNames(
                      isActive ? 'bg-red-600 text-white' : 'text-white hover:bg-red-600 hover:text-white',
                      'block rounded-md px-3 py-1 text-base font-medium'
                    )
                  }
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
