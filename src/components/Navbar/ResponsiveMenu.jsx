import React, { useState, useEffect, useRef } from "react";
import "./ResponsiveMenu.css";
import JP from "../../components/assets/JP.jpeg";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  const [isPhotoLarge, setIsPhotoLarge] = useState(false);
  const menuRef = useRef(null);
  const photoRef = useRef(null);

  const handlePhotoClick = () => {
    setIsPhotoLarge((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
    if (photoRef.current && !photoRef.current.contains(event.target)) {
      setIsPhotoLarge(false);
    }
  };

  useEffect(() => {
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className={`fixed top-0 bottom-0 z-50 flex flex-col bg-slate-950 text-white transition-transform duration-300 ${
        showMenu ? "left-0" : "-left-full"
      } md:hidden`}
    >
      <div className="flex-1 flex flex-col justify-between p-8">
        <div className="card relative">
          <div className="flex items-center gap-4">
            <div className="relative jp-img-container">
              <img
                ref={photoRef}
                src={JP}
                alt="Jayesh Patel"
                className={`jp-img transition-transform duration-200 ${
                  isPhotoLarge ? "scale-photo" : "h-12 w-12"
                }`}
                onClick={handlePhotoClick}
                loading="lazy"
              />
            </div>
            <div>
              <h1>Shailesh Waghela</h1>
              <h2 className="text-sm text-slate-500">Proprietor</h2>
            </div>
          </div>
          <nav className="mt-12">
            <ul className="space-y-4 text-xl">
              <li>
                <a href="/" className="mb-5 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="/DanceStudio" className="mb-5 inline-block">
                  Dance Studio
                </a>
              </li>
              <li>
                <a href="/Service" className="mb-5 inline-block">
                 Our Services
                </a>
              </li>
              <li>
                <a href="/Gallery" className="mb-5 inline-block">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/ContactUs" className="mb-5 inline-block">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/aboutus" className="mb-5 inline-block">
                  About Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
