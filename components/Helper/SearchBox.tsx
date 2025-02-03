import React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Pointer, SearchIcon } from 'lucide-react'

const SearchBox = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
            <SearchIcon size={26} cursor={'Pointer'}></SearchIcon>
        </DialogTrigger>
        <DialogContent>
          
        <DialogTitle></DialogTitle>
            <form>
                <input type='text' placeholder='search for product' className='block w-full bg-gray-300 rounded-lg px-6 py-2 
                mt-4 outline-none' />
            </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default SearchBox
SearchBox