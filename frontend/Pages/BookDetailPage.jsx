import React, { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import { useNavigate, useParams } from 'react-router-dom'
import { useBookStore } from '../store/useBookStore.js'
import { Loader } from 'lucide-react'

const BookDetailPage = () => {
    const {isDeletingBook,isgettingOneBook,getOneBook,deleteBook,book} = useBookStore();
    const {id} = useParams();
    const navigate  = useNavigate();
    useEffect(() => {
      getOneBook(id)
    }, [getOneBook,id])

    const handleDelete = async()=>{
        await deleteBook(id)
        navigate('/')
    }
    
  return (
    <div className='flex flex-col'>
        <Navbar/>
        <div className='w-full h-[calc(100vh-53px)] bg-gray-700 flex justify-center items-center'>
            <div className='w-[40%] h-[40%] bg-gray-500 flex lg:flex-row flex-col md:flex-row'>
                {!isgettingOneBook?(
                    <>
                    <div className='w-[40%] h-full'>
                    <img src={book.coverUrl} alt="img" className='w-full h-full object-cover rounded-md' />
                </div>
                <div className='w-[60%] p-3 h-full flex flex-col justify-center gap-4 items-center'>
                    <div className='flex  items-start gap-2'>
                        <h1 className='text-4xl text-white font-bold'>Title:-</h1>
                        <h1 className='text-4xl text-white font-semibold'>{book.title}</h1>
                    </div>
                    <div className='flex  items-start gap-2'>
                        <h1 className='text-4xl text-white font-bold'>Author:-</h1>
                        <h1 className='text-4xl text-white font-semibold'>{book.author}</h1>
                    </div>
                    <div className='flex  items-start gap-2'>
                        <h1 className='text-4xl text-white font-bold'>Genre:-</h1>
                        <h1 className='text-4xl text-white font-semibold'>{book.genre}</h1>
                    </div>
                    <div className='w-full flex justify-center items-center' onClick={handleDelete}>
                        <button className='text-2xl text-white font-bold p-3 bg-red-500 rounded-md'>
                            {isDeletingBook?(
                                <div className='w-full h-full p-2'>
                                    <Loader className='text-white animate-spin' size={24}/>
                                    
                                </div>
                            ):"Delete"}
                        </button>
                    </div>
                </div>
                    </>
                    ):(
                        <div className='w-full h-full flex justify-center items-center'>
                            <Loader className='text-white animate-spin' size={24}/>
                        </div>
                    )}
            </div>
        </div>
    </div>
  )
}

export default BookDetailPage