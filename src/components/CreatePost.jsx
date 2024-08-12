function CreatePost (props) {
    return (
        <figure class="flex flex-col justify-center b-5 p-8  bg-zinc-800 border-gray-600 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <figcaption class="flex">
                <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div class="text-white">Create Post</div>
                </div>
            </figcaption> 
            <figcaption class="flex flex-row bg-gray-800 b-5">
                <div class="flex items-center">
                    <svg class="size-6 text-white items-center m-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                    </svg>
                </div>
                <input class="w-100 bg-gray-100 text-gray-100 my-4 m-2"></input>
            </figcaption>
            <figcaption class="flex flex-row justify-end ">
                <button class="bg-blue-400 rounded-xl w-20">Post</button>
            </figcaption>
        </figure>
    )
}
export default CreatePost;