import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmarks,handleReadTime}) => {
    const [blogs, setBlog] = useState([]);
    useEffect(()=>{

        fetch('blog.json')
        .then(res =>res.json())
        .then(data => setBlog(data));
    },[])

    return (
        <div className="md:w-2/3">

        <h1 className="text-4xl">Blogs: {blogs.length}</h1>
        {
            blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmarks={handleBookmarks} handleReadTime={handleReadTime}></Blog>)
        } 
        </div>
    );
};


Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleReadTime: PropTypes.func
}
export default Blogs;