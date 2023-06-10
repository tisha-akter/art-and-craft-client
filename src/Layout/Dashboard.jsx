import { FaBookOpen, FaBookReader, FaCartArrowDown, FaHome, FaUserCheck, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useSelectedClass from "../hooks/useSelectedClass";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Dashboard = () => {
    const [classCart] = useSelectedClass();

    const isAdmin = true;


    return (

        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                    <div className="mb-20">
                        <Navbar></Navbar>
                    </div>

                    <Outlet></Outlet>
                    <div className="mb-0">
                        <Footer></Footer>
                    </div>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  bg-violet-300 text-base-content">

                        {
                            isAdmin ? <>
                                {/* Sidebar content here */}
                                <li><NavLink to='/dashboard/home'>
                                    <FaHome></FaHome>
                                    Admin Home
                                </NavLink></li>
                                <li><NavLink to='/dashboard/home'>
                                    <FaBookReader></FaBookReader>
                                    Manage Classes
                                </NavLink></li>
                                <li><NavLink to='/dashboard/allusers'>
                                    <FaUserCheck></FaUserCheck>
                                    Manage Users
                                </NavLink></li>



                            </> : <>
                                {/* Sidebar content here */}
                                <li><NavLink to='/dashboard/home'>
                                    <FaHome></FaHome>
                                    User Home
                                </NavLink></li>

                                <li><NavLink to='/dashboard/payhistory'>
                                    <FaWallet></FaWallet>
                                    Payment history
                                </NavLink>
                                </li>

                                <li><NavLink to='/dashboard/my-selected-class'>
                                    <FaCartArrowDown></FaCartArrowDown>
                                    <div className="flex gap-2">
                                        My Selected Classes
                                        <span className="badge badge-secondary">+{classCart?.length || 0}</span>
                                    </div>
                                </NavLink>
                                </li>
                            </>
                        }






                        <div className="divider"></div>
                        <li><NavLink to='/'>
                            <FaHome></FaHome>
                            Home</NavLink>
                        </li>

                        <li><NavLink to='/classes'>
                            <FaBookOpen></FaBookOpen>
                            Classes
                        </NavLink>
                        </li>
                    </ul>

                </div>
            </div>

        </>
    );
};

export default Dashboard;