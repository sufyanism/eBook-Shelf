import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import AddBookPage from './Pages/AddBookPage.jsx'
import EditBookPage from './Pages/EditBookPage.jsx'
import BookDetailPage from './Pages/BookDetailPage.jsx'
import { Toaster } from 'react-hot-toast'
const App = () => {
  return (
    <div className='h-full w-full '>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/add_book' element={<AddBookPage/>}/>
        <Route path='/edit_book/:title/:id' element={<EditBookPage/>}/>
        <Route path='/view_book/:id' element={<BookDetailPage/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App