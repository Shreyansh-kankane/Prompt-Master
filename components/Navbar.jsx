"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "@styles/globals.css";

import { useEffect,useState } from 'react'

import { signIn, signOut, useSession, getProviders } from 'next-auth/react'



const Navbar = () => {

    const [isLogIn,setLogIn] = useState(true)

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image
                src="/assets/images/logo.svg"
                width={30}
                height={30}
                className='object-contain'
            />
            <p className='logo_text'> Prompt Master </p>
        </Link>
        <div className='sm:flex hidden'>
            {isLogIn ? (
                <div className='flex gap-3 md:gap-5'>
                    <Link href="/create=prompt" className='black_btn'>
                        Create Post
                    </Link>
                </div>

            ) : (<div>
                </div>)
            }
        </div>
    </nav>

  )
}

export default Navbar
