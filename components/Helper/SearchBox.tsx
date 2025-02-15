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
// 'use client'
// import { useState } from "react";
// import { SearchIcon } from "lucide-react";

// export default function SearchBox() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative flex items-center">
//       {/* Search Icon */}
//       <button onClick={() => setIsOpen(!isOpen)} className="p-2">
//         <SearchIcon size={26} className="cursor-pointer" />
//       </button>

//       {/* Search Input (Shown when isOpen is true) */}
//       {isOpen && (
//         <input
//           type="text"
//           autoFocus
//           placeholder="Search for product"
//           className="ml-2 w-64 bg-gray-200 rounded-xl px-4 py-2 outline-none transition-all"
//           onBlur={() => setIsOpen(false)} // Close when clicking outside
//         />
//       )}
//     </div>
// //   );
// }
"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const SearchBox = () => {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("search") as string; // Get the search input value
    console.log("Search Query:", name); // Replace with your search logic
    if (searchQuery.trim()) {
      router.push(`/all-products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
    >
      <input
        type="text"
        name="search" // Add a name attribute for FormData
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
        aria-label="Search" // Improve accessibility
      />
      <button
        type="submit" // Ensure the button submits the form
        aria-label="Search" // Improve accessibility
      >
        <Search className="w-5 h-5 text-gray-500" />
      </button>
    </form>
  );
};

export default SearchBox;
