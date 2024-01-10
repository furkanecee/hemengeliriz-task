import React from 'react'
import Logo from '../../img/logo/logo.png'

const Header = () => {
    return (
        <nav class="flex justify-between max-md:mb-8 mb-16 ">

            <div className="menu">
                <button type="button" class="flex text-sky-500 hover:text-white border border-sky-500 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg md:text-sm p-3.5 md:pl-5 md:pr-5 text-center justify-center gap-3" ><i class="fa-solid fa-bars md:m-auto"></i><span class="max-md:hidden">&nbsp;Menü</span></button>
            </div>
            <div className="relative">
                <img className="h-10 w-52 max-md:h-6 max-md:w-32 mt-4" src={Logo} alt="" />
            </div>
            <div className="links mt-1">
                <button type="button" class="text-white bg-sky-500 font-medium rounded-full text-sm text-center w-11 h-11">
                    <i className='fa-solid fa-bell'></i>
                </button>
            </div>

        </nav>
    );
}

export default Header;