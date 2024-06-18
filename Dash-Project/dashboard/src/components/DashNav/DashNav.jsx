// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import logo1 from "../images/Logo1.png";
// import logo from "../images/Logo.png";

// import {
//   FaTachometerAlt,
//   FaChartPie,
//   FaFileInvoice,
//   FaCalendarAlt,
//   FaEnvelope,
//   FaBell,
//   FaCog,
// } from "react-icons/fa";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../images/Logo1.png";
import logo from "../images/Logo.png";
import lamp from "../images/lamp.jpg";
import pic from "../images/profile.jpg";
// import invoice from "../images/Invoice.png";
// import { useNavigate } from "react-router-dom";

import { BsFillFileBarGraphFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { BiSolidCalendar } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";

import {
  FaTachometerAlt,
  FaChartPie,
  FaFileInvoice,
  FaCalendarAlt,
  FaEnvelope,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const DashNav = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

//   const activeLink = 'text-blue-500 bg-gradient-to-r from-slate-100  to-white'


  
  //return (
//     <>
//       <div className="flex h-screen bg-gray-100 ">
//         <div
//           className={`transition-width duration-500    ${
//             isNavOpen ? "w-52 " : "w-20 m-3"
//           } bg-white shadow-lg `}
//         >
//           <button
//             onClick={toggleNav}
//             className={`mt-4 ml-4 pt-4  text-gray-500 focus:outline-none`}
//           >
//             {!isNavOpen && (
//               <h1 className=" mt-5  ">
//                 <img className="" src={logo1} alt="" />
//               </h1>
//             )}
//             {/* <img src={logo1} alt="" /> */}
//           </button>

//           <div className="flex flex-col items-center">
//             <div className="flex items-center  mt-4 mb-6" onClick={toggleNav}>
//               {isNavOpen && (
//                 <h1 className="text-xl font-bold text-gray-700">
//                   <img src={logo} alt="" />
//                 </h1>
//               )}
//             </div>
//             <nav className=" w-full flex-1">
//               <li className="list-none ">
//                 <NavLink    style={({ isActive }) => ({
//                                 color : isActive
//                                     ?'yellow'
//                                     : "white",
//                             })}  to="/">
//                   <NavItem
//                     icon={<FaTachometerAlt />}
//                     label="Dashboard"
//                     isNavOpen={isNavOpen}
//                   ></NavItem>
//                 </NavLink>
//               </li>
//               <li className="list-none  ">
//                 <NavLink to="/Analytics">
//                   {" "}
//                   <NavItem
//                     icon={<FaChartPie />}
//                     label="Analytics"
//                     isNavOpen={isNavOpen}
//                   ></NavItem>
//                 </NavLink>
//               </li>
//               <li className="list-none  ">
//                 <NavLink to="/Invoice">
//                   {" "}
//                   <NavItem
//                     icon={<FaFileInvoice />}
//                     label="Invoice"
//                     isNavOpen={isNavOpen}
//                   ></NavItem>
//                 </NavLink>
//               </li>
//               <li className="list-none   ">
//                 <NavLink to="/Schedule">
//                   {" "}
//                   <NavItem
//                     icon={<FaCalendarAlt />}
//                     label="Schedule"
//                     isNavOpen={isNavOpen}
//                   ></NavItem>
//                 </NavLink>
//               </li>
//               <li className="list-none  ">
//                 <NavLink to="/Calendar">
//                   {" "}
//                   <NavItem
//                     icon={<FaCalendarAlt />}
//                     label="Calendar"
//                     isNavOpen={isNavOpen}
//                   ></NavItem>
//                 </NavLink>
//               </li>
//               <li className="list-none  ">
//                 <NavLink to="/Messages">
//                   {" "}
//                   <NavItem
//                     icon={<FaEnvelope />}
//                     label="Messages"
//                     isNavOpen={isNavOpen}
//                   ></NavItem>
//                 </NavLink>
//               </li>
//               <li className="list-none  ">
//                 <NavLink to="/Notification">
//                   <NavItem
//                     icon={<FaBell />}
//                     label="Notification"
//                     isNavOpen={isNavOpen}
//                   ></NavItem>
//                 </NavLink>
//               </li>
//               <li className="list-none   ">
//                 <NavLink to="/Settings">
//                   {" "}
//                   <NavItem
//                     icon={<FaCog />}
//                     label="Settings"
//                     isNavOpen={isNavOpen}
//                   ></NavItem>
//                 </NavLink>
//               </li>
//             </nav>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// const NavItem = ({ icon, label, isNavOpen }) => (
//   <div className="flex   p-2 text-gray-600 hover:text-blue-500 hover:bg-gradient-to-r from-slate-100  to-white rounded-lg">
//     <div className="p-2 pl-6">{icon}</div>
//     {isNavOpen && <span className="ml-4 ">{label}</span>}
//   </div>
// );

return (
  <>
    <div className="flex h-screen bg-gray-50 ">
      <div
        className={`transition-width duration-500    ${
          isNavOpen ? "w-52 " : "w-20 m-3"
        } bg-white shadow-lg `}
      >
        {isNavOpen ? (
          <button
            onClick={toggleNav}
            className={` ml-10  text-gray-500 focus:outline-none`}
          >
            <h1 className=" mt-5  ">
              <img className="" src={logo} alt="" />
            </h1>
          </button>
        ) : (
          <button
            onClick={toggleNav}
            className="flex items-center  mb-2 mt-4 ml-4"
          >
            <h1 className="text-xl font-bold text-gray-700">
              <img src={logo1} alt="" />
            </h1>
          </button>
        )}

        <div className="flex flex-col items-center">
          <nav className=" w-full flex-1">
            <li className="list-none ">
              <NavLink to="/">
                <NavItem
                  icon={<BsGridFill />}
                  label="Dashboard"
                  isNavOpen={isNavOpen}
                ></NavItem>
              </NavLink>
            </li>
            <li className="list-none  ">
              <NavLink to="/Analytics">
                {" "}
                <NavItem
                  icon={<BsFillFileBarGraphFill />}
                  label="Analytics"
                  isNavOpen={isNavOpen}
                ></NavItem>
              </NavLink>
            </li>
            <li className="list-none  ">
              <NavLink to="/Invoice">
                {/* <img src={invoice} alt=""  className="hover:text-blue-700"/> */}
              
                <NavItem
                
                  icon={<FaFileInvoice />}
                  label="Invoice"
                  isNavOpen={isNavOpen}
                ></NavItem>
              </NavLink>
            </li>
            <li className="list-none   ">
              <NavLink to="/Schedule">
                {" "}
                <NavItem
                  icon={<CgNotes />}
                  label="Schedule"
                  isNavOpen={isNavOpen}
                ></NavItem>
              </NavLink>
            </li>
            <li className="list-none  ">
              <NavLink to="/Calendar">
                {" "}
                <NavItem
                  icon={<BiSolidCalendar />}
                  label="Calendar"
                  isNavOpen={isNavOpen}
                ></NavItem>
              </NavLink>
            </li>
            <li className="list-none  ">
              <NavLink to="/Messages">
                {" "}
                <NavItem
                  icon={<FaEnvelope />}
                  label="Messages"
                  isNavOpen={isNavOpen}
                ></NavItem>
              </NavLink>
            </li>
            <li className="list-none  ">
              <NavLink to="/Notification">
                <NavItem
                  icon={<FaBell />}
                  label="Notification"
                  isNavOpen={isNavOpen}
                ></NavItem>
              </NavLink>
            </li>

            {!isNavOpen ? (
              <li className="list-none  mb-28">
                <NavLink to="/Settings">
                  {" "}
                  <NavItem
                    icon={<FaCog />}
                    label="Settings"
                    isNavOpen={isNavOpen}
                  ></NavItem>
                </NavLink>
              </li>
            ) : (
              <li className="list-none  ">
                <NavLink to="/Settings">
                  {" "}
                  <NavItem
                    icon={<FaCog />}
                    label="Settings"
                    isNavOpen={isNavOpen}
                  ></NavItem>
                </NavLink>
              </li>
            )}
          </nav>
          <div className="flex flex-col items-center p-4">
            {isNavOpen && (
              <>
                <img className="w-[135px]" src={lamp} />
                <button className="bg-blue-800 text-white px-4 py-2 rounded-lg mb-4">
                  Upgrade Now
                </button>
              </>
            )}
            <div className="flex items-center">
              <img
                src={pic}
                alt="Profile"
                className="rounded-full w-10 h-10 mb-4"
              />

              {isNavOpen && (
                <div className="mx-4 ">
                  <h4 className="font-semibold text-gray-700">
                    Easin Arafat
                  </h4>
                  <p className="text-gray-500 text-sm">Free Account</p>
                </div>
              )}
              {isNavOpen && <FaSignOutAlt onClick={()=>{

                navigate("/Login")
            
          }}  />}
            </div>

            {!isNavOpen && <FaSignOutAlt /> }
          </div>
        </div>
      </div>
    </div>
  </>
);
};
const NavItem = ({ icon, label, isNavOpen }) => (
<div className="flex   p-2 text-gray-600 hover:text-blue-500 hover:bg-gradient-to-r from-slate-100  to-white rounded-lg">
  <div className="p-2 pl-6">{icon}</div>
  {isNavOpen && <span className="ml-4 ">{label}</span>}
</div>
);


export default DashNav;
