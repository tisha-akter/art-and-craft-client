import { FaBookOpen, FaBookReader, FaCartArrowDown, FaHome, FaUserCheck, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useSelectedClass from "../hooks/useSelectedClass";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";


const Dashboard = () => {
    const [classCart] = useSelectedClass();

    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    const [isInstructor] = useInstructor();


    return (

        <>
            
                <Navbar></Navbar>
           
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content mt-12">



                    <Outlet></Outlet>

                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side mt-16">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 pt-10 w-80 h-full  bg-violet-300 text-base-content">

                        {
                            isAdmin && <>
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

                            </>

                               
                        }

                        {
                            isInstructor && <>
                            <li><NavLink to='/dashboard/instructor-home'>
                                <FaHome></FaHome>
                                Instructor Home
                            </NavLink></li>
                            <li><NavLink to='/dashboard/add-class'>
                                <FaBookReader></FaBookReader>
                                Add a Class
                            </NavLink></li>
                            <li><NavLink to='/dashboard/allusers'>
                                <FaBookOpen></FaBookOpen>
                                My added classes
                            </NavLink></li>
                        </>
                        }

                        {
                            !isAdmin && !isInstructor ? <>
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
                        : 
                        <></>
                        }

                    </ul>

                </div>
            </div>

            <div className="mb-0">
                <Footer></Footer>
            </div>
        </>
    );
};

export default Dashboard;