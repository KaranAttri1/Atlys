import {lorenIpsum} from '../utils/sampleData';
function Post (props) {

    return (
        <figure class="flex flex-col justify-center p-8 m-3 bg-gray-500 border-gray-500 rounded-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <figcaption class="flex p-5 px-0">
                <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"/>
                <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                    <div class="text-white">{props.name ||"Theresa Webb"}</div>
                    <div class="text-sm text-gray-300 dark:text-gray-400">{props.timeOfPost || "5 mins ago"}</div>
                </div>
            </figcaption> 
            <figcaption class="flex flex-row bg-gray-800 b-5 rounded-lg p-5 px-0">
                <div class="flex items-center m-2.5">
                    <svg class="size-6 text-white items-center m-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                    </svg>
                </div>
                <p class="text-gray-100 my-4 m-2">{lorenIpsum || "Hello"}  </p>
            </figcaption>
            <figcaption class="flex flex-row rounded-lg p-5 px-0">
                <svg class="size-6 m-2 text-white" xmlns={props.textIcon || "http://www.w3.org/2000/svg"} fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>
                <a class="text-gray-300 m-2">{props.comments || 0} Comments</a>   
            </figcaption>
        </figure>
    )
}
export default Post;
