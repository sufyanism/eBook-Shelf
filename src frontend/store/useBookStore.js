import {create} from "zustand"
import {toast} from "react-hot-toast"
import { axiosInstance } from "../lib/axios.js"

export const useBookStore = create((set,get)=>({
    books:[],
    book:{},
    isgettingBooks:false,
    isAddingBook:false,
    isEditingBook:false,
    isDeletingBook:false,
    isgettingOneBook:false,

    getBooks:async()=>{
        set({isgettingBooks:true})
        try {
            const res = await axiosInstance.get("/books/all")
            set({books:res.data})            
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isgettingBooks:false})
        }
    },

    addBook:async(data)=>{
        set({isAddingBook:true})
        try {
            const res = await axiosInstance.post("/books/add",data)
            toast.success("Added a book")
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isAddingBook:false})
        }
    },

    editBook:async(data,id)=>{
        set({isEditingBook:true})
        try {
            const res = await axiosInstance.put(`/books/edit/${id}`,data)
            toast.success("book edited successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isEditingBook:false})
        }
    },
    deleteBook:async(id)=>{
        set({isDeletingBook:true})
        try {
            const res = await axiosInstance.delete(`/books/delete/${id}`)
            toast.success("book deleted successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isDeletingBook:false})
        }
    },

    getOneBook:async(id)=>{
        set({isgettingOneBook:true})
        try {
            const res = await axiosInstance.get(`/books/one/${id}`)
            set({book:res.data})
            toast.success("fetched book successfully")
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isgettingOneBook:false})
        }
    }
}))