import { NavLink } from 'react-router-dom';

const navLinks = [
    {
      "pathName": "HOME",
      "path": "/"
    },
    {
      "pathName": "ADD IMAGE",
      "path": "/AddImages"
    },
  ];

const NavBar = () => {
  return (
    <div className="navLinks">
      {navLinks.map((Navlink) => {
        return (
          <div className="navLink" key={Navlink.pathName}>
            <NavLink key={Navlink.path} to={Navlink.path} >{Navlink.pathName}</NavLink>
          </div>
        )
      })}
    </div>
  )
}

export default NavBar;