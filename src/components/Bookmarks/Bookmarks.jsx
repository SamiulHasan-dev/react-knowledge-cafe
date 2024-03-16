import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='flex-1 ml-4 x'>
            <div className="bg-gray-300 rounded-xl pb-2">
                <div className='text-center mb-4 p-4'>
                    <h3 className='text-2xl'>Reading Time: {readingTime}</h3>
                </div>
            <h2 className="text-xl font-semibold text-center mt-3 p-4 rounded-xl">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx)=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.number,
};

export default Bookmarks;