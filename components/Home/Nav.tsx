import Image from 'next/image' 
import Link from 'next/link'
import React from 'react'
import SearchBox from '../Helper/SearchBox'
import { HeartIcon, UserIcon } from 'lucide-react'
import ShoppingCartButton from '../Helper/ShoppingCartButton'
import singUpPage from '@/app/(auth)/sign-up/[[...sign-up]]/page'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Nav = () => {
  return (
    <div className='h-[12v] sticky top-0 z-[1] bg-white shadow-md'>

      <div className='flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full'>
      <Link href='/'> 


      <Image  src='/images/logo.png' alt='logo' width={140} height={140} />
       </Link>
<div className='flex items-center space-x-6'>
  <SearchBox />
  <HeartIcon size={26} cursor={'pointer'}></HeartIcon>
  <ShoppingCartButton />
  {/* userButton */}
  <SignedOut>
    <SignInButton><UserIcon size={26} cursor={'pointer'} ></UserIcon></SignInButton>
  </SignedOut>
  <SignedIn>
  <UserButton/>
  
  </SignedIn>
 
</div>
</div>
    </div>
  )
}

export default Nav
