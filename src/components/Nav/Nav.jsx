import { NavLink } from "react-router-dom";

const Nav = () => {

    const navOptions = <>
    
     <li><NavLink className="bg-black text-white font-bold" to="/">Home</NavLink></li>
     <li><NavLink className="bg-pink-500 text-white font-bold" to="/robiulvai">Watch Me</NavLink></li>
     <li><NavLink className="bg-violet-800 text-white font-bold" to="/success">History Of Success</NavLink></li>
     <li><NavLink className="bg-pink-950 text-white font-bold" to="/celebration">200k Celebration</NavLink></li>
     
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
         {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-pink-600 font-bold">MD Robiul Islam</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
    {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
  
    <a className="btn bg-black text-white font-bold">
  Facebook
    </a>
  </div>
</div>
    );
};

export default Nav;