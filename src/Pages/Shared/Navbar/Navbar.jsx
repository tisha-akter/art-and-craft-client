import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaCartArrowDown, FaUserCircle } from "react-icons/fa";
import useSelectedClass from "../../../hooks/useSelectedClass";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [classCart] = useSelectedClass();

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleToggle = () => {
        if(e.target.checked) {
            setTheme("dark");
        }
        else{
            setTheme("light")
        }
    }


    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li>
            {isAdmin || isInstructor ? (
                <Link to="/dashboard">
                    <button className="btn btn-sm">Dashboard</button>
                </Link>
            ) : (
                <Link to="/dashboard/my-selected-class">
                    <button className="btn btn-sm">
                        <FaCartArrowDown></FaCartArrowDown>
                        <div className="badge badge-secondary text-sm">+{classCart?.length || 0}</div>
                    </button>
                </Link>
            )}
        </li>

    </>

    useEffect(() => {
        localStorage.setItem("theme", theme );
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme]);


    return (
        <div>
            <div className="navbar fixed z-10 max-w-screen-xl bg-opacity-60 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown text-purple-500">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">   <h2 className="text-3xl font-bold font-serif"><span className="text-purple-500">A</span><span className="text-purple-400">r</span><span className="text-purple-300">t</span> & <span className="text-violet-200">C</span><span className="text-violet-300">r</span><span className="text-violet-400">a</span><span className="text-violet-500">f</span><span className="text-violet-600">t</span></h2></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ?
                        (
                            <div title={user.email}>

                                {user.photoURL ?
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-8 md:w-10 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>
                                    </label>
                                    :
                                    <FaUserCircle className='text-4xl'></FaUserCircle>
                                }

                            </div>
                        ) :
                        (
                            <Link to="/login">
                                <button className='btn btn-sm bg-violet-500'>Login</button>
                            </Link>
                        )}
                    {user && (
                        <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
                    )}

                    <label className="swap swap-rotate">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleToggle} />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;