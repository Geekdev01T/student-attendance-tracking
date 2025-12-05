"use client"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { GraduationCap, Hand, LayoutIcon, Settings } from 'lucide-react';
import Image from 'next/image'
import React from 'react'

function SideNav() {

  const {user} = useKindeBrowserClient();

  const menuList = [
    {
      id: 1,
      name: 'Dashboard',
      path: '/dashboard',
      icon: LayoutIcon
    },
    {
      id: 2,
      name: 'Students',
      path: '/dashboard/students',
      icon: GraduationCap
    },
    {
      id: 3,
      name: 'Attendance',
      path: '/dashboard/attendance',
      icon: Hand
    },
    {
      id: 4,
      name: 'Settings',
      path: '/dashboard/sttings',
      icon: Settings
    },
  ];

  return (
    <div className='border shadow-md h-screen p-5'>

      <Image src="/logo1.png" alt="Logo" width={180} height={40} className='mx-auto' />
      <hr className='my-5' />

      {
        menuList.map((menu, index) => (
          <h2 className='flex items-center gap-4 p-4 cursor-pointer text-slate-600 font-medium 
          hover:bg-primary hover:text-white duration-200 rounded-lg my-2'>
            <menu.icon/>
            {menu.name}
          </h2>
        ))
      }

      <div className='flex gap-3 items-center text-slate-700 bottom-5 fixed p-2 cursor-pointer'>
        <Image src={user?.picture || '/logo2.png'} alt="Profile Picture" width={35} height={35} className='rounded-full' />
        <div>
          <h2 className='text-sm font-bold'>{user?.given_name} {user?.family_name}</h2>
          <h2 className='text-xs text-slate-500'>{user?.email}</h2>
        </div>
      </div>

    </div>
  )
}

export default SideNav
