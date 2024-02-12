import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AssignedIcon, HomeIcon, KnowledgeIcon, NewAssignedIcon, ProfileIcon } from '../../asset/icon';
import { NAV_PATH } from '../../constant/nav';
import { useLocation } from 'react-router-dom';
import Layout from '../layout/Layout';
import { useAppContext } from '../../hooks/useAppContext';

const TITLE_HEIGHT = 50;
const TAB_BAR_HEIGHT = 70;
const { ASSIGNED, HOME, KNOWLEDGE, NEW_ASSIGNED, PROFILE } = NAV_PATH

const titles = {
  [HOME]: 'Home',
  [ASSIGNED]: 'Assigned',
  [KNOWLEDGE]: 'Knowledge',
  [NEW_ASSIGNED]: 'New Assigned',
  [PROFILE]: 'Profile'
}

function Main() {
  const { pathname } = useLocation()
  const route = pathname.slice(1);
  const { user } = useAppContext()

  const userRule = {
    admin: "",
    user: "hidden md:block"
  }


  return (
    <>
      {/* Desktop view */}
      <div className={`${userRule[user?.role]}`}>
        <Layout />
      </div>
      {/* Mobile View */}
      <div className={`${user.role === 'admin' ? 'hidden' : 'h-screen overflow-hidden block md:hidden pt-5'} `}>
        {/* header part */}
        <p style={{ height: TITLE_HEIGHT }} className='font-bold text-2xl bg-gray-100 text-gray-700 text-center h-10'>{titles[pathname]}</p>

        {/* body part */}
        <div className={`h-full ${route === "knowledge" ? "overflow-hidden" : "overflow-scroll"}`} style={{ paddingBottom: TAB_BAR_HEIGHT * 1.6 }}>
          <Outlet />
        </div>
        {/* tab bar part */}
        <div style={{ height: TAB_BAR_HEIGHT }} className='h-16 flex hiden justify-between bg-white fixed bottom-0 w-screen px-3 font-manrope text-xs'>
          <NavLink to={HOME} className={({ isActive }) => `flex flex-col justify-center items-center  ${isActive ? "stroke-primary text-primary" : "stroke-gray text-gray"}`}>
            <HomeIcon className='size-7 cursor-pointer' />
            <span>Home</span>
          </NavLink>
          <NavLink to={ASSIGNED} className={({ isActive }) => `flex flex-col justify-center items-center ${isActive ? "stroke-primary text-primary" : "stroke-gray text-gray"}`}>
            <AssignedIcon className='size-7 cursor-pointer' />
            <span  >Assigned</span>
          </NavLink>
          <NavLink to={NEW_ASSIGNED} className={({ isActive }) => `flex flex-col justify-center items-center  ${isActive ? "stroke-primary text-primary" : "stroke-gray text-gray"}`}>
            <NewAssignedIcon className=' size-7 cursor-pointer' />
            <span  >New Assigned</span>
          </NavLink>
          <NavLink to={KNOWLEDGE} className={({ isActive }) => `flex flex-col justify-center items-center  ${isActive ? "fill-primary text-primary" : "fill-gray text-gray"}`}>
            <KnowledgeIcon className=' size-7 cursor-pointer' />
            <span >Knowledge Base</span>
          </NavLink>
          <NavLink to={PROFILE} className={({ isActive }) => `flex flex-col justify-center items-center ${isActive ? "stroke-primary text-primary" : "stroke-gray text-gray"}`}>
            <ProfileIcon className='size-7 cursor-pointer' />
            <span >Profile</span>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Main