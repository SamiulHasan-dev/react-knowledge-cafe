import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img,posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-7 rounded-2xl' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center gap-5'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl font-semibold'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center text-xl'>
                    <span>{reading_time} min read</span>
                    <button onClick={ () => handleAddToBookmark(blog)} className='ml-2 text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>

            <h2 className='text-4xl mb-4 font-bold'>{title}</h2>
            <p className='my-2'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">  #{hash}</a></span>)
                }
            </p>
            <button className='text-purple-800 font-bold underline'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;