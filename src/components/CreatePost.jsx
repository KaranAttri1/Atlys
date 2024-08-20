import { useNavigate } from "react-router-dom";

function CreatePost (props) {
    const navigate = useNavigate()
    return (
        <figure class="flex flex-col justify-center b-5 p-8 m-3 bg-gray-500 border-gray-600 rounded-b-lg md:rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <figcaption class="flex p-5 px-0">
                <div class="pb-2 space-y-0.5 font-medium dark:text-white text-left rtl:text-right">
                    <div class="text-white text-xl">Create post</div>
                </div>
            </figcaption> 
            <figcaption class="flex flex-row bg-gray-800 b-5 rounded-xl p-5 px-0 ">
                <div class="flex items-center rounded-full bg-gray-500 m-2.5">
                    <svg class="size-6 text-white items-center m-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                    </svg>
                </div>
                <input class="w-full bg-gray-800 text-gray-100 my-4 m-2 " placeholder="How are you feeling today ?"></input>
            </figcaption>
            <figcaption class="flex flex-row justify-end p-5 px-0 ">
                <button onClick={()=>navigate('/signup')} class="bg-blue-400 rounded-lg w-20 h-10">Post</button>
            </figcaption>
        </figure>
    )
}
export default CreatePost;