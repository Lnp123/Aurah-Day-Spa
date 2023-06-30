import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import {Link} from 'react-scroll'
const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='sticky top-0 flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-gray-200 font-bold '>
        
            <h1 className=' w-full text-3xl font-bold text-gray-200'>AURAH</h1>
            <ul className=' p-6 hidden md:flex cursor-pointer '>
                <li className=' p-6 hover:underline '>
                    <Link to="Hero" smooth={true} duration={500}>
                     Home
                    </Link>
                </li>
                <li className='p-6 hover:underline'>
                    <Link to="Services" smooth={true} duration={500}>
                     Services
                    </Link>
                </li>
                
                <li className='p-6 hover:underline'>
                    <Link to="Newsletter" smooth={true} duration={500}>
                     Membership
                    </Link>
                </li>
                
                <li className='p-6 hover:underline'>
                    <Link to="Cards" smooth={true} duration={500}>
                     About
                    </Link>
                </li>
                
                
            </ul>
            <div onClick={handleNav} style={{cursor:'pointer'}} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}  
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full text-gray-200  list-none bg-[none] ease-in-out duration-500' : 'fixed right-[-100%] '}>
            <li className='p-4'>
                    <Link onClick={handleNav} to="Hero" smooth={true} duration={500} style={{cursor:'pointer'}} >
                     Home
                    </Link>
                </li>
                <li className='p-4'>
                    <Link to="Services" smooth={true} duration={500} style={{cursor:'pointer'}}>
                     Services
                    </Link>
                </li>
                
                <li className='p-4'>
                    <Link  to="Newsletter" smooth={true} duration={500} style={{cursor:'pointer'}}>
                     Membership
                    </Link>
                </li>
                
                <li className='p-4'>
                    <Link to="Cards" smooth={true} duration={500} style={{cursor:'pointer'}}>
                     About
                    </Link>
                </li>

              
                
            </div>

        </div>
            
    )
}

export default Navbar