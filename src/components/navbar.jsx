import React from 'react'
import {NavLink} from 'react-router-dom'
const navbar = () => {
    return (
        <>
                {/* <NavLink  className ={(e)=>{return e.isActive?"black":""}} to="/"><li>Home</li></NavLink>
                <NavLink className ={(e)=>{return e.isActive?"black":""}}  to="/about"><li>About</li></NavLink>
                <NavLink className ={(e)=>{return e.isActive?"black":""}}  to="/login"><li>Log in</li></NavLink> */}

            <nav className='flex justify-between items-center bg-white text-black p-2 px-4 font-semibold' style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.15)' }}>
                <div><img className='w-[90px] h-[50px]' src="/src/assets/img/nobgLogo.png" alt="logo" /></div>
                <NavLink className ={(e)=>{return e.isActive?"black":""}} to="/" > Home</NavLink>
                <div className='flex gap-4 flex-row'>
                    <NavLink className ={(e)=>{return e.isActive?"black":""}} to="/account"  >
                    <div>Account</div>
                    <img src="/src/assets/svgs/account.svg" alt="" />
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default navbar