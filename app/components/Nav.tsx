'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import React from 'react';

function Nav() {
    const collapse = () => {
        document.querySelector('#menu')?.classList.toggle('hidden');
      };
    return(
        <nav className='container-fluid w-full bg-[#5e5e5e] md:flex md:flex-row md:justify-between'>
            <div className="p-2 grid content-center">
                <div className='h-[42px] grid content-center'>Logo</div>
                <div className='col-start-12 grid content-center' ><button className='md:hidden' onClick={collapse}><FontAwesomeIcon icon={faBars} /></button></div>
            </div>
            <div className='hidden md:grid md:col-span-5' id='menu'>
                <ul className='menu md:flex md:justify-center md:flex-row my-auto pr-7'>
                    <li className='py-2 md:px-2' ><Link href={'../book'}>Books</Link></li>
                    <li className='py-2 md:px-2' ><Link href={'../addbook'}>Add Books</Link></li>
                    <li className='py-2 md:px-2'><Link href={'../customerBooks'}>customer Books</Link></li>
                    <li className='py-2 md:px-2'><Link href={'../orders'}>Orders</Link></li>
                    <li className='py-2 md:px-2'><Link href={'../orderNew'}>Order New</Link></li>
                    <li className='py-2 md:px-2'><Link href={'../about'}>About</Link></li>
                </ul>
            </div>

        </nav>

    );
}

export default Nav;