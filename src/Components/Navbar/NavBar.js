import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const NavBar = () => {
    const [open,setopen] = useState(false);
    const routes = [
{id:1, name:'Home', path:'/home'},
{id:2, name:'Products', path:'/Products'},
{id:3, name:'Order', path:'/Order'},
{id:4, name:'Contact', path:'/Contact'},
{id:5, name:'About', path:'/about'}

    ];
    return (
        <div>
            <nav className='w-full bg-indigo-500'>
                <div onClick={()=> setopen(!open)} className="h-6 w-6 md:hidden">
                {
                open ?<XMarkIcon /> : <Bars3Icon/>
                }
                </div>

                <ul className={`w-full md:flex justify-center absolute md:static  duration-500 ease bg-indigo-500  ${open ? 'top-6' : 'top-[-120px]'}`}>
                        {
                            routes.map(route => <Link 
                                key={route.id}
                                route = {route}
                                ></Link>)
                        }
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;