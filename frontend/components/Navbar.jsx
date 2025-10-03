import React from 'react'
import { Link } from 'react-router-dom'
import { Home,Plus,Pencil } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='bg-gray-600 flex justify-between items-center w-full px-4'>
        <div className='p-3 text-white font-semibold text-xl'>
            Book Shelf
        </div>
        <div className='flex gap-2 justify-center items-center text-white font-semibold text-xl'>
            <Link to='/' className='p-3 flex gap-1 justify-center items-center hover:bg-gray-500'><Home className='text-white'/> Home</Link>
            <Link to='add_book' className='p-3 flex gap-1 justify-center items-center hover:bg-gray-500'><Plus className='text-white'/> Add</Link>
        </div>
    </div>
  )
}

export default Navbar