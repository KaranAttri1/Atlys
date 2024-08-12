

function SignUp () {
    return (
<>
{/* <!-- Main modal --> */}
<div id="authentication-modal" tabindex="-1" aria-hidden="true" class="place-items-center dark overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div class="border-2 border-gray-400 relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div class="flex items-center justify-center p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <div>
                <h4 class="text-center text-sm text-gray-400 dark:text-gray-400">
                    WELCOME BACK
                </h4>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Log into your account
                </h3>
            </div> 
                {/* <button type="button" class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button> */}
            </div>
            {/* <!-- Modal body --> */}
            <div class="p-4 md:p-5">
                <form class="space-y-4" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Enter your email" required />
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Choose a preferred username" required />
                    </div>
                    <div>
                        {/* <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label> */}
                        <div class="flex justify-between">
                            <div class="flex items-start">
                                
                                <label for="remember" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            </div>
                            {/* <a href="#" class="text-xs place-items-center text-blue-700 hover:underline dark:text-white">Forgot Password?</a> */}
                        </div>
                        <input type="password" name="password" id="password" placeholder="Enter your password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </div>

                    <button type="submit" class="w-full text-white bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login now</button>
                    <div class="text-sm justify-start font-medium text-gray-500 dark:text-gray-300">
                        Not registered yet? 
                        <a href="#" class="ms-2 text-blue-700 hover:underline dark:text-white">Register
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 

</>   
    )
}
export default SignUp;