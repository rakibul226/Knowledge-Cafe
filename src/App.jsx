import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const[bookmarks,setBookmarks] = useState([]);

  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }


  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto gap-5'>
      <Blogs handleBookmarks={handleBookmarks}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
    </div>
    </>
  )
}

export default App
