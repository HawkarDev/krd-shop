// import React from 'react'
// import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
// import { Pointer, SearchIcon } from 'lucide-react'

// const SearchBox = () => {
//   return (
//     <div>
//       <Dialog>
//         <DialogTrigger>
//             <SearchIcon size={26} cursor={'Pointer'}></SearchIcon>
//         </DialogTrigger>
//         <DialogContent>
          
//         <DialogTitle></DialogTitle>
//             <form>
//                 <input type='text' placeholder='search for product' className='block w-full bg-gray-300 rounded-lg px-6 py-2 
//                 mt-4 outline-none' />
//             </form>
//         </DialogContent>
//       </Dialog>
// </div>

//   );
// }

// export default SearchBox
// SearchBox
'use client'
import { useState } from "react";
import { SearchIcon } from "lucide-react";

export default function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex items-center">
      {/* Search Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="p-2">
        <SearchIcon size={26} className="cursor-pointer" />
      </button>

      {/* Search Input (Shown when isOpen is true) */}
      {isOpen && (
        <input
          type="text"
          autoFocus
          placeholder="Search for product"
          className="ml-2 w-64 bg-gray-200 rounded-xl px-4 py-2 outline-none transition-all"
          onBlur={() => setIsOpen(false)} // Close when clicking outside
        />
      )}
    </div>
  );
}