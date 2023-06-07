import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.jpeg'
const NavBar = () => {
    const menu = <>
        <Link className='text-white font-bold mt-3 rounded-lg p-3 hover:text-blue-700' to="/"><a>Home</a></Link>
        <Link className='text-white font-bold mt-3 rounded-lg p-3 hover:text-blue-700' to="/viewAllProjects"><a>All Projects</a></Link>
        <Link className='text-white font-bold mt-3 rounded-lg p-3 hover:text-blue-700' to="/contact"><a>Contact</a></Link>
        <Link className='text-white font-bold mt-3 rounded-lg p-3 hover:text-blue-700' to="/"><a>Blog</a></Link>

    </>

    return (
        <div className='lg:px-10'>
            <div className="navbar  lg:bg-gradient-to-r from-pink-500 via-fuchsia-700 to-fuchsia-700 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-purple-800 text-white rounded-box w-52">
                            {
                                menu
                            }
                        </ul>
                    </div>
                    <img src={Logo} alt="" className='ms-4 rounded-full h-0 w-0 lg:w-20 lg:h-20 invisible lg:visible ' />
                    <a className="lg:mx-2 font-bold text-5xl   text-white"><i >Port<span >folio</span></i></a>
                </div>
                <div className="navbar-end me-10 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menu}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;