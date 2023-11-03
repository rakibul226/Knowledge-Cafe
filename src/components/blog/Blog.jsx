import PropTypes from 'prop-types';
import { BsBookmarks } from 'react-icons/bs';

const Blog = ({blog, handleBookmarks,handleReadTime}) => {
    const {id,title,cover,reading_time,author,author_img,posted_date,hashtag}= blog;
    return (
        <div className='mb-20 mt-3'>
            <img className='h-96 w-full' src={cover} alt={`Title of the cover ${title}`} />
                <div className='flex justify-between p-2'>
                    <div className='flex gap-2'>
                        <img className='w-12' src={author_img} alt="" />
                        <div className='gap-1'>
                            <h3>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div>
                        <span>{reading_time} min read</span>
                        <button onClick={() => handleBookmarks(blog)}className='ml-1'><BsBookmarks></BsBookmarks></button>
                        {/* <button><FaBeer></FaBeer></button> */}
                    </div>
                </div>
            <h2 className='text-3xl'>{title}</h2>
            <div className=''>
                <h5>{hashtag}</h5> 
            </div>
            <button  className='pt-4 text-red-500 underline' onClick={() => handleReadTime(id,reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func.isRequired,
    handleReadTime: PropTypes.func.isRequired
}

export default Blog;