import React from 'react'
import { NavLink } from 'react-router-dom'
const navbar = () => {
    return (
        <>
            <nav className=' fixed top-0 w-full z-50   flex justify-between items-center bg-white text-black p-2 px-4 font-semibold mb-2' style={{ boxShadow: '0px 3px 3px 0px rgba(0, 0, 0, 0.15)' }}>
                <div><img className='w-[90px] h-[50px]' src="/src/assets/img/nobgLogo.png" alt="logo" /></div>
                <NavLink className={(e) => { return e.isActive ? "black" : "" }} to="/" > Home</NavLink>
                
                    <NavLink className={(e) => { return e.isActive ? "black" : "" }} to="/account"  >
                       <div className='flex gap-4 flex-row'>
                        <div>Account</div>
                        <img src="/src/assets/svgs/account.svg" alt="" />
                        </div>
                    </NavLink>
                
            </nav>
        </>
    )
}

export default navbar