import CreatePost from "./CreatePost";
import FeedTitle from "./FeedTitle";
import Post from "./Post";

function Feed (props) {

    return (
        <div class="flex flex-column items-center  relative w-6/12 justify-center m-0 m-auto"> 
            <div>
                <FeedTitle></FeedTitle>      
                <CreatePost></CreatePost>
                <Post></Post>
            </div> 
        </div>
    )
}
export default Feed;