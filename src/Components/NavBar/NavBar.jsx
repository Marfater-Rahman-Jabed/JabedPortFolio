import Logo from '../../assets/logo.jpeg'
const NavBar = () => {
    const menu = <>
        <li className='text-white font-bold'><a>Blog</a></li>
        <li className='text-white font-bold'> <a>Item 3</a></li>
    </>

    return (
        <div>
            <div className="navbar  lg:bg-gradient-to-r from-pink-500 via-fuchsia-700 to-fuchsia-700">
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
                    <a className="lg:mx-2 font-bold text-3xl   text-slate-400">JABED`S BIO </a>
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