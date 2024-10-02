import React from 'react'
import { Search } from 'lucide-react'

function SearchBar() {
  return (
    <div className='flex gap-3 text-[14px] items-center border p-2 rounded-md '>
        <Search height={15}/>
        <input type="text" placeholder='Search Course' className='bg-transparent outline-none' />
    </div>
  )
}

export default SearchBar