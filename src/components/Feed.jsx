import CreatePost from "./CreatePost";
import Post from "./Post";

function Feed (props) {

    return (
        <>        
        <figure class="flex flex-col justify-center p-8  bg-zinc-800 border-gray-600 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <h1>Hello Jane</h1>
            <h2>How are you doing today? Would you like to share something with the community ? </h2>
        </figure>
        <CreatePost></CreatePost>
        <Post></Post>
        </>
    )
}
export default Feed;