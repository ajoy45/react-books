import React from 'react';
import logo from '../assets/logo.png'
import { Link} from 'react-router-dom';
import ActiveLink from './ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className="navbar bg-orange-100 px-24" >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <ActiveLink  to='/'>Home</ActiveLink>
              <ActiveLink to='/books' >Books</ActiveLink>
              <ActiveLink to='/order' >Order</ActiveLink>
            </ul>
          </div>
          <Link to='/' ><img className="w-12" src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <ActiveLink  to='/' className='font-bold text-2xl text-blue-500 mr-4'>Home</ActiveLink>
            <ActiveLink to='/books' className='font-bold text-2xl text-blue-500 mr-4'>Books</ActiveLink>
            <ActiveLink to='/order' className='font-bold text-2xl text-blue-500'>Order</ActiveLink>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn font-bold">Login</a>
        </div>
      </div>
    );
};

export default Header;