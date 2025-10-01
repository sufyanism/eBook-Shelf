import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Camera, Loader2 } from 'lucide-react'
import { useBookStore } from '../store/useBookStore.js'
import {toast} from "react-hot-toast"
import { useParams } from 'react-router-dom'

const EditBookPage = () => {
    const {editBook,isEditingBook} = useBookStore();
    const {title,id} = useParams();
    const [form, setform] = useState({
        title:"",
        author:"",
        genre:"",
        coverUrl:""
    })

    const handleImage = async(e)=>{
        const file = e.target.files[0]
        if(!file) return;
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = async()=>{
            const base64Image = reader.result;
            setform({...form,coverUrl:base64Image})
        }
    }

    const validateForm = () =>{
        if(!form.title.trim()) return toast.error("title is required")
        if(!form.author.trim()) return toast.error("author is required")
        if(!form.genre.trim()) return toast.error("genre is required")
        if(!form.coverUrl.trim()) return toast.error("coverUrl is required")
        return true;    
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const success = validateForm()
        if(success === true){
            await editBook(form,id);
            setform({
                title:"",
                author:"",
                genre:"",
                coverUrl:""
            })
        }
    }


  return (
    <div className='flex flex-col'>
        <Navbar/>
        <form onSubmit={handleSubmit}  className='w-full h-[calc(100vh-53px)] bg-gray-700 flex flex-col justify-between items-center p-3'>
            <h1 className='text-white text-4xl font-bold'>Editing {title}</h1>
            <div className='border-2 border-black rounded-full size-[200px] relative'>
                <img src={form.coverUrl} alt="img" className='w-full h-full object-cover rounded-full'  />
                <label htmlFor="book-img" className='size-[50px] cursor-pointer flex justify-center items-center bg-gray-700 rounded-full p-2 border-2 border-black absolute right-3 bottom-5'>
                    <Camera className='text-black' size={24}/>
                    <input type="file" onChange={handleImage} id="book-img" className='hidden'/>
                </label>
            </div>
            <div className='lg:w-[30%] md:w-[60%] w-[90%] flex flex-col gap-2 justify-center items-start'>
                <h1 className='text-white text-2xl font-bold px-2'>Title:-</h1>
                <input type="text" className='w-full p-2 rounded-full' value={form.title} placeholder='Ex:-Atomic habits' onChange={(e)=>setform({...form,title:e.target.value})} />
            </div>
            <div className='lg:w-[30%] md:w-[60%] w-[90%] flex flex-col gap-3 justify-center items-start'>
                <h1 className='text-white text-2xl font-bold px-2'>Author:-</h1>
                <input type="text" className='w-full p-2 rounded-full' value={form.author} placeholder='Ex:-kavidas' onChange={(e)=>setform({...form,author:e.target.value})} />
            </div>
            <div className='lg:w-[30%] md:w-[60%] w-[90%] flex flex-col gap-3 justify-center items-start'>
                <h1 className='text-white text-2xl font-bold px-2'>Genre:-</h1>
                <input type="text" className='w-full p-2 rounded-full' value={form.genre} placeholder='Ex:-fantasy' onChange={(e)=>setform({...form,genre:e.target.value})} />
            </div>
            <button type='submit' className='lg:w-[30%] md:w-[60%] w-[90%] p-5 bg-gray-600 border-2 border-black font-bold text-2xl text-white rounded-lg'>
                {isEditingBook?(
                    <div className='w-full h-full flex justify-center items-center gap-2'>
                        <Loader2 className='text-white animate-spin' size={24}/>
                        <h1>Loading</h1>
                    </div>
                ):"Submit"}
            </button>
        </form>
    </div>
  )
}

export default EditBookPage