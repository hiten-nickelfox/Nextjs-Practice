"use client"

import Image from "next/image"
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import ReactAvatar from "react-avatar"
// import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-[#0055d1] filter blur-3xl opacity-50 -z-50"></div>
        <Image
          src="https://links.papareact.com/c2cdd5"
          alt="trello logo"
          width={300}
          height={400}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"></Image>

        {/* search box */}
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form className="bg-white flex items-center space-x-5 rounded-md p-2 shadow-md flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400"></MagnifyingGlassIcon>
            <input type="text" placeholder="Search" className="flex-1 outline-none p-2" />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          <ReactAvatar name="Hiten Soni" round color="#0055d1" size="50"></ReactAvatar>
        </div>
      </div>

      <div className="flex items-center justify-center px-5 py-2 md:py-5">
        <p className="flex p-5 items-center text-sm font-light shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055d1]">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#0055d1] mr-1"></UserCircleIcon>
          GPT is summarising your tasks for the day...
        </p>
      </div>
    </header>
  )
}

export default Header
