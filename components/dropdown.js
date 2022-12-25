import React from "react"
import { useSession, signIn, signOut } from "next-auth/react"
export default function Example() {
  const { data: session } = useSession();
  return (
    <div >
      <div class="group inline-block relative">
        <button
          class="bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded inline-flex items-center"
        >
          <span class="mr-1">{session.user.name[0]+session.user.name[1]+session.user.name[2]}</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </button>
        
        <ul class="absolute hidden text-gray-700 pt-1 group-hover:block">
          <li class="">
            <a
              class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
              >Download Ticket</a
            >
          </li>
          <li class="">
            <a
              class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
              >Logout</a
            >
          </li>
         
        </ul>
      </div>
    </div>
  )
}
