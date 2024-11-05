"use client";

import React, { useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const NavBar = () => {
    
const router = useRouter()
  const activeMenu = useMemo(() => {
        return 'trade';
    }, [router])
  
  const navBarLinks = [
        { key: 'trade', name: 'Trade', href: '/trade', paths: ['/trade/**']},
        { key: 'portfolio', name: 'Portfolio', href: '/portfolio', paths: ['/portfolio/**'] },
        { key: 'markets', name: 'Markets', href: '/markets', paths: ['/markets/**'] },
        { key: 'cp', name: 'CP', href: '/cp', paths: ['/cp/**'] },
    ]
    
  return (
    <nav className='w-full flex flex-col justify-center items-center'>
        <div className='flex flex-row gap-4'>
           {navBarLinks.map(link => (
            <div key={link.key} className={`flex cursor-pointer h-8 w-24 hover:bg-slate-600 rounded-md ${activeMenu === link.key && 'bg-slate-700'} text-center justify-center items-center`}>
                <Link className={`font-thin  ${activeMenu === link.key && 'font-extrabold'}`} href={link.href}>{link.name}</Link>
            </div>
            ))}
            <div key={'more'} className='flex cursor-pointer h-8 w-24 hover:bg-slate-600 rounded-md text-center justify-center items-center'>
                <Link className='font-thin' href='/dev'>More</Link>
            </div>
            <WalletMultiButton style={{}} />
       </div>
    </nav>
  )
}

export default NavBar
