function FeedTitle () {
    return (
        <figure class="flex flex-col justify-center p-5 px-0  border-gray-600 rounded-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <h1 class="text-3xl m-3 text-gray-300">Hello Jane</h1>
        <h2 class="text-xm m-3 text-zinc-100 flex flex-row">How are you doing today? Would you like to share something with the community ?
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
        </h2>
        </figure>
    )
}

export default FeedTitle;