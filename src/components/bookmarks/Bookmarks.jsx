import Bookmark from './bookmark';
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md: w-1/3">
            <h1 className="text-4xl">Bookmarks:{bookmarks.length}</h1>
            <div>
                {
                    bookmarks.map(bookmark => <Bookmark bookmark={bookmark} key={bookmark.id}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired
}

export default Bookmarks;