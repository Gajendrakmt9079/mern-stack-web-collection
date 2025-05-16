import { MessageCircle, Phone } from 'lucide-react'
import React from 'react'

function NavNotification() {
  return (
    <div className='flex flex-wrap justify-between items-center bg-blue-600 text-white px-5 py-3 top-0 fixed w-[100vw] z-10 '>
         <p className='flex flex-row gap-1'> <MessageCircle/>customer@toygifty.com</p>
         <p className=' md:block hidden'>Free shipping for all orders of $150 </p>
         <p className='flex flex-row gap-1'><Phone/>(907) 602-0209</p>
    </div>
  )
}

export default NavNotification