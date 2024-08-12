function Post (props) {

    return (
        <figure class="flex flex-col justify-center p-8  bg-zinc-800 border-gray-600 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
     
            <figcaption class="flex">
                <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"/>
                <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div class="text-white">{props.name ||"Joseph McFall"}</div>
                    <div class="text-sm text-gray-300 dark:text-gray-400">{props.timeOfPost || "5 mins ago"}</div>
                </div>
            </figcaption> 
            <figcaption class="flex flex-row bg-gray-800 b-5">
                <div class="flex items-center">
                    <svg class="size-6 text-white items-center m-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                    </svg>
                </div>
                <p class="text-gray-100 my-4 m-2">You have many examples that can be used to create a fast prototype for your team."</p>
            </figcaption>
            <figcaption class="flex flex-row">
                <svg class="size-6 m-2 text-white" xmlns={props.textIcon || "http://www.w3.org/2000/svg"} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
                <a class="text-gray-300 m-2">{props.comments || 0} Comments</a>   
            </figcaption>
        </figure>
    )
}
export default Post;


        // <article class="bg-gray-100 dark:bg-gray-100">
        //     <footer class="">
        //         <div class="flex flex-row justify-start">
        //             <img class="rounded-full w-10 h-10" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie Green"/>
        //             <div>
        //                 <span class="">Bonnie Green</span> 
        //                 <p class=""><time pubdate="" datetime="2022-03-12" title="">5 mins ago</time></p>
        //             </div>   
        //         </div>
        //         <div class="">
        //             <button type="button" class="">
        //                 <svg class="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
        //                     <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"></path>
        //                 </svg>
        //                 22
        //             </button>
        //             <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3" class="" type="button">
        //                 <svg class="" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
        //                     <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path>
        //                 </svg>
        //                 <span class="">Comment settings</span>
        //             </button>
        //         </div>
        //         {/* <!-- Dropdown menu --> */}
        //         <div id="dropdownComment3" data-popper-placement="bottom" class="post-box">
        //             <ul class="" aria-labelledby="dropdownComment3Button">
        //                 <li>
        //                     <a href="#" class="">Edit</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" class="">Remove</a>
        //                 </li>
        //                 <li>
        //                     <a href="#" class="">Report</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </footer>
        //     <p class="">The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.</p>
        //     <button type="button" class="">
        //         Reply
        //     </button>
        // </article>

        // **************