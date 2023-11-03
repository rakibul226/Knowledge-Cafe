import Bookmark from './bookmark';
import PropTypes from 'prop-types';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md: w-1/3">
            <div>
                <h3>Reading Time : {readingTime} mins</h3>
            </div>

            <h1 className="text-4xl">Bookmarks:{bookmarks.length}</h1>
            <div>
                {
                    bookmarks.map((bookmark,idx) => <Bookmark bookmark={bookmark} key={idx}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}

export default Bookmarks;