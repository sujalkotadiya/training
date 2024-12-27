// import React from 'react'
// import { NavLink } from 'react-router-dom'

import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <div className='flex flex-row gap-4 '>
//       <NavLink to="/">
//         Home
//       </NavLink>
//       <NavLink to="/pastes">
//         Pastes
//       </NavLink>
//     </div>
//   )
// }

// export default Navbar



const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <NavLink to="/" className="hover:text-blue-400">
          Home
        </NavLink>
        <NavLink to="/pastes" className="hover:text-blue-400">
          Pastes
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;