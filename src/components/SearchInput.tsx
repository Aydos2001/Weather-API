import React, { useState } from "react"
import { BiSearch } from "react-icons/bi"

type SearchProps = {
    value : string | null
    setCountry : any
    getWetherData : any
}

const SearchInput = (props: SearchProps) => {
    
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        props.setCountry(event.target.value)
    }
    function handleButtonSubmit() {
       props.getWetherData(props.value)
    }

    return (
        <div className="relative mt-[20px]">
            <input onChange={handleInputChange} className="w-full outline-none shadow-sm py-[7px] pl-[30px] pr-[10px] rounded-full border-[1px] border-gray-200" type="search" placeholder="Set country" />
            <div className="absolute top-[10px] left-2 text-[20px] text-gray-600">
                <BiSearch />
            </div>
            <button onClick={handleButtonSubmit} className="absolute top-1 right-1 py-1 px-2 bg-blue-800 text-white rounded-full hover:bg-blue-600 active:scale-[0.97]">
                Search
            </button>
        </div>
    )
}

export default SearchInput