import React, { useEffect, useState } from 'react'
import { Loader, Pencil, Search } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import { useBookStore } from '../store/useBookStore.js'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const [query, setquery] = useState("")
    const [status, setstatus] = useState("all")
    const [result, setresult] = useState([])
    const {books,getBooks,gettingBooks} = useBookStore();
    const navigate = useNavigate();
    useEffect(() => {
      getBooks();
    }, [getBooks])
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const filterBooks = books.filter((book)=>(book.title.toLowerCase().includes(query.toLowerCase()))||(book.author.toLowerCase().includes(query.toLowerCase())))
        if(filterBooks.length === 0) return;
        setresult(filterBooks)
        setstatus("query")
    }
    let content;
    if(status === "all"){
        content = books.map((book)=>(
            <div className='flex gap-1'>
            <button className='hover:bg-gray-500 w-[80%] flex items-center p-2' onClick={()=>navigate(`/view_book/${book._id}`)}>
                <div className='w-[50%] text-white font-medium text-xl overflow-hidden'>
                    {book.title}
                </div>
                <div className='w-[50%] text-white font-medium text-xl overflow-hidden'>
                    {book.genre}
                </div>
            </button>
            <button className='w-[10%] hover:bg-gray-500 flex justify-center items-center' onClick={()=>navigate(`/edit_book/${book.title}/${book._id}`)}>
                <Pencil className='text-white' size={22}/>
            </button>
            </div>
        ))
    }

    else if(status==="query"){
        content=result.map((book)=>(
            <div className='flex gap-1'>
            <button className='hover:bg-gray-500 w-[80%] flex items-center p-2' onClick={()=>navigate(`/view_book/${book._id}`)}>
                <div className='w-[50%] text-white font-medium text-xl overflow-hidden'>
                    {book.title}
                </div>
                <div className='w-[50%] text-white font-medium text-xl overflow-hidden'>
                    {book.genre}
                </div>
            </button>
            <button className='w-[10%] hover:bg-gray-500' onClick={()=>navigate(`/edit_book/${book.title}/${book._id}`)}>
                <Pencil className='text-white' size={22}/>
            </button>
            </div>
        ))
    }
    
  return (
    <div className='flex flex-col'>
    <Navbar/>
    <div className='w-full h-[calc(100vh-53px)] bg-gray-700 flex flex-col justify-center items-center'>
        <h1 className='lg:text-6xl md:text-4xl text-3xl text-center font-bold text-white mb-10'>Search for any book from our shelf</h1>
        <div className='h-[60%] lg:w-[50%] md:w-[70%] w-[95%] flex flex-col items-center justify-between p-3 gap-10'>
            <form className='w-full flex relative' onSubmit={handleSubmit}>    
                <input type="text" placeholder='Search here' onChange={(e)=>setquery(e.target.value)} className='bg-white w-full px-5 py-2 rounded-full' />
                <button className='absolute right-4 top-2' type='submit'>
                    <Search className='text-gray-700' size={24}/>
                </button>
            </form>
            <div className='h-[90%] w-full flex flex-col items-center p-3 border-2 border-black rounded-lg'>
                <div className='w-[70%] flex items-center p-2 pl-10 '>
                    <div className='w-[54%] text-black font-semibold text-xl'>
                        Title
                    </div>
                    <div className='w-[36%] text-black font-semibold text-xl'>
                        Genre
                    </div>
                    <div className='w-[10%] text-black font-semibold text-xl'>
                        Edit
                    </div>
                </div>
                <div className='border border-black w-[90%]'></div>
                <div className='w-[90%] overflow-auto  py-1'>
                    {!gettingBooks?content:(
                        <div className='w-full h-[200px] flex justify-center items-center'>
                            <Loader className='text-white animate-spin' size={24}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HomePage