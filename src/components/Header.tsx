import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import { SignInButton, SignedOut, UserButton,  } from '@clerk/nextjs';
import { ThemeToggler } from './ThemeToggler';

function Header() {
  return (
    <header className='flex items-center justify-between'>

      <Link href="/" className="flex items-center space-x-2" >
          <div className="bg-[#0160FE] w-fit">
            <Image 
              src="https://www.shareicon.net/data/512x512/2015/08/26/91241_box_512x512.png"
              alt="logo"
              className="invert"
              height={50}
              width={50} />

          </div>
          <h1 className='font-bold text-xl'>DropBox</h1>
      </Link>

      <div className="px-5 flex space-x-2 items-center ">

        {/*Theme toggler*/}
        <ThemeToggler/>
        <UserButton afterSignOutUrl='/' />

        <SignedOut>
            <SignInButton forceRedirectUrl='/dashboard' mode='modal' />
        </SignedOut>
      </div>
      
    </header>
  )
}

export default Header;
