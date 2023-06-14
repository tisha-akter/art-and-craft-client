import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaCartArrowDown, FaUserCircle } from "react-icons/fa";
import useSelectedClass from "../../../hooks/useSelectedClass";



const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [classCart] = useSelectedClass();

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
            <Link to="/dashboard/my-selected-class">
                <button className="btn btn-sm">
                    <FaCartArrowDown></FaCartArrowDown>
                    <div className="badge badge-secondary text-sm">+{classCart?.length || 0}</div>
                </button>
            </Link>
        </li>

    </>


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
                </div>
            </div>
        </div>
    );
};

export default Navbar;