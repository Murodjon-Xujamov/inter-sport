import React, { useState } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaTelegram, FaFacebook } from 'react-icons/fa';
import { IoMdGlobe } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
import '../../assets/scss/_navbar.scss';
import { Container } from '@mui/system';
import { Link, useLocation } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const changeScrollNavbar = () => {
    if (window.scrollY >= 200) {
      setFixedNavbar(true);
    } else {
      setFixedNavbar(false);
    }
  };
  window.addEventListener("scroll", changeScrollNavbar);
  const [ menu, setMenu ] = useState(false);

  return (
    <nav className={`${fixedNavbar ? "fixed" : ""}`} style={{ width: "100%" }}>
      <div className={`media-menu ${menu ? 'openMenu' : ''}`}>
        <IconButton onClick={() => setMenu(false)} style={{position: 'absolute', top: '15px', right: '15px'}}>
          <VscClose />
        </IconButton>
        <ul className="media-list">
          <li onClick={() => setMenu(false)}>
            <Link to="/">Bosh sahifa</Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/about">Biz haqimizda</Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/goal">Maqsadlar</Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/team">Jamoa</Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/event">Tadbirlar</Link>
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/media">
              Media
              {/* <MdKeyboardArrowDown size={22} /> */}
            </Link>
            {/* <ul>
              <li>
                <Link to="/media">Foto</Link>
              </li>
              <li>
                <Link to="/media">Video</Link>
              </li>
            </ul> */}
          </li>
          <li onClick={() => setMenu(false)}>
            <Link to="/news">Yangiliklar</Link>
          </li>
        </ul>
      </div>
      <Container>
        <ul className="nav-list">
          <IconButton onClick={() => setMenu(true)} className="menu-bars">
            <VscMenu />
          </IconButton>
          <li>
            <Link to="/">Bosh sahifa</Link>
          </li>
          <li>
            <Link to="/about">Biz haqimizda</Link>
          </li>
          <li>
            <Link to="/goal">Maqsadlar</Link>
          </li>
          <li>
            <Link to="/team">Jamoa</Link>
          </li>
          <li>
            <Link to="/event">Tadbirlar</Link>
          </li>
          <li>
            <Link to="/media">
              Media
              <MdKeyboardArrowDown size={22} />
            </Link>
            <ul>
              <li>
                <Link to="/media">Foto</Link>
              </li>
              <li>
                <Link to="/media">Video</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/news">Yangiliklar</Link>
          </li>
          <div className="nav-lang">
            <li>
              <Link to="">
                <FaTelegram size={18} />
              </Link>
            </li>
            <li>
              <Link to="">
                <AiFillInstagram size={18} />
              </Link>
            </li>
            <li>
              <Link to="">
                <FaFacebook size={18} />
              </Link>
            </li>
            <li style={{ marginLeft: "12px" }}>
              UZ
              <ul>
                <li>
                  <Link to="">UZ</Link>
                </li>
                <li>
                  <Link to="">RU</Link>
                </li>
              </ul>
              <IoMdGlobe style={{ paddingLeft: "10px" }} size={18} />
            </li>
          </div>
        </ul>
        {/* mobile menu */}
      </Container>
    </nav>
  );
}

export default Navbar;
