import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import { useState } from 'react'

function App() {

  const[bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

  const handleBookmarks = blog =>{
    const newBookmarks = [...bookmarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleReadTime = (id,time) =>{
    const newReadTime = readingTime + time;
    setReadingTime(newReadTime);
    //remove bookmark
    // console.log('remove bookmark',id);
    const remainingBookMarks = bookmarks.filter(bookmarks => bookmarks.id !== id);
    setBookmarks(remainingBookMarks);
  }


  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto gap-5'>
      <Blogs handleBookmarks={handleBookmarks} handleReadTime={handleReadTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
    </>
  )
}

export default App
