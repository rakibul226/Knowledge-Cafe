import { useEffect } from "react";
import { useState } from "react";


const Blog = () => {
    const [blogs, setBlog] = useState([]);
    useEffect(()=>{

        fetch('blog.json')
        .then(res =>res.json())
        .then(data => setBlog(data));
    },[])

    return (
        <div>


    
        </div>
    );
};

export default Blog;