import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AssignedIcon, HomeIcon, KnowledgeIcon, NewAssignedIcon, ProfileIcon } from '../../asset/icon';
import { NAV_PATH } from '../../constant/nav';
import { useLocation } from 'react-router-dom';
const TITLE_HEIGHT = 50;
const TAB_BAR_HEIGHT = 70;
const {ASSIGNED,HOME,KNOWLEDGE,NEW_ASSIGNED,PROFILE} = NAV_PATH
const titles = {
  [HOME]: 'Home',
  [ASSIGNED]: 'Assigned',
  [KNOWLEDGE]: 'Knowledge',
  [NEW_ASSIGNED]: 'New Assigned',
  [PROFILE]: 'Profile'
}

function Main() {
 const {pathname} = useLocation()
  
  return (
    <div className='h-screen overflow-hidden'> 
        {/* header part */}
        <p style={{height:TITLE_HEIGHT}} className='font-bold text-2xl bg-gray-100 text-gray-700 text-center h-10'>{titles[pathname]}</p>
        
        {/* body part */}
        <div className='bg-gray-100 h-full overflow-scroll' style={{paddingBottom:TAB_BAR_HEIGHT*1.6}}>
          <Outlet/>
        </div>
        {/* tab bar part */}
        <div style={{height: TAB_BAR_HEIGHT}} className='h-16 flex justify-between bg-white fixed bottom-0 w-screen px-3'>
          <NavLink to={HOME} className={({isActive})=>`flex flex-col justify-center items-center  ${isActive ?"stroke-primary text-primary": "stroke-paragraph text-paragraph" }`}>
            <HomeIcon className=' size-7 cursor-pointer'/>
            <span className='text-xs'>Home</span>
          </NavLink>
          <NavLink to={ASSIGNED} className={({isActive})=>`flex flex-col justify-center items-center ${isActive ?"stroke-primary text-primary": "stroke-paragraph text-paragraph" }`}>
            <AssignedIcon className='size-7 cursor-pointer'/>
            <span className='text-xs'>Assigned</span>
          </NavLink>
          <NavLink to={NEW_ASSIGNED}  className={({isActive})=>`flex flex-col justify-center items-center  ${isActive ?"stroke-primary text-primary": "stroke-paragraph text-paragraph" }`}>
            <NewAssignedIcon className=' size-7 cursor-pointer'/>
            <span className='text-xs'>New Assigned</span>
          </NavLink>
          <NavLink to={KNOWLEDGE}  className={({isActive})=>`flex flex-col justify-center items-center  ${isActive ?"fill-primary text-primary": "fill-paragraph text-paragraph" }`}>
            <KnowledgeIcon className=' size-7 cursor-pointer'/>
            <span className='text-xs'>Knowledge Base</span>
          </NavLink>
          <NavLink to={PROFILE}  className={({isActive})=>`flex flex-col justify-center items-center ${isActive ?"stroke-primary text-primary": "stroke-paragraph text-paragraph" }`}>
            <ProfileIcon className='size-7 cursor-pointer'/>
            <span className='text-xs'>Profile</span>
          </NavLink>
        </div>
    </div>
  )
}

export default Main