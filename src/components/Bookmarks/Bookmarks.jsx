import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='flex-1 ml-4 x'>
            <div className="bg-gray-300 rounded-xl pb-2">
            <h2 className="text-xl font-semibold text-center mt-3 p-4 rounded-xl">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=> <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
};

export default Bookmarks;