"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const route = useRouter();
  
    const links = [
        {
            title: "Home",
            path: '/'
        },
        {
            title: "About",
            path: '/about'
        },
        {
            title: "Services",
            path: '/services'
        },
        {
            title: "Contact",
            path: '/contact'
        },
        {
            title: "Blogs",
            path: '/blogs'
        },
        {
            title: "Categories",
            path: '/categories'
        }
    ]

    const handleButton = () =>{
        route.push('/about')
    }

if(pathName.includes('dashboards'))
  return <div> dashboards layout </div>;
 
    return ( 
        <div>
            <div className="navbar bg-slate-200">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      
        {
            links.map((link)=> <Link className={`${pathName === link.path && "text-cyan-400 font-bold"}`} key={link.path}  href={link.path}>{link.title}</Link> )
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-4 ">
  
    {
            links.map((link)=> <Link className={`${pathName === link.path && "text-cyan-400 font-bold"}`} key={link.path} href={link.path}>{link.title}</Link> )
        }
   
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn" onClick={handleButton}>Button</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;