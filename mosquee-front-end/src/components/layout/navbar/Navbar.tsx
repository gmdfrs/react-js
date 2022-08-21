import React, {useEffect, useState} from 'react';
import "./Navbar.css"

function Navbar() {

  const [open, setOpen] = useState(false);

    return (
      <div className="header">
        <div className="antialiased bg-gray-100 dark-mode:bg-gray-900">
          <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
              <div className="flex flex-row items-center justify-between p-1">
                <a href="/">
                    <img src="https://alrashidmosque.ca/wp-content/uploads/2019/03/Logo.png"
                        srcSet="https://alrashidmosque.ca/wp-content/uploads/2019/03/Logo.png 1x" 
                        width="50"
                        height="50" 
                        alt="Al Rashid Mosque Logo"
                        className="fusion-standard-logo">
                    </img>
                </a>
                {/* <a href="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">Flowtrail UI</a> */}
                  <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" 
                        onClick={() => setOpen(!open)} >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" >
                    <path className={ !open ? 'visible' : 'invisible'   } fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"/>
                    <path className={ open ? 'visible' : 'invisible'   } fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
              <nav className={ `${open ? 'flex' : 'hidden'} flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row` }>
                <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-base-color dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-base-color focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="presentation">Présentation</a>
                <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-base-color focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="islam">L’Islam</a>
                <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-base-color focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="school">École</a>
                <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-base-color focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="donation">Donation</a>
                <a className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-base-color focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="contact">Contact</a>
              </nav>
            </div>
          </div>
      </div>
    </div>
    );
}

export default Navbar;