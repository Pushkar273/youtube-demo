import React from 'react'

function SearchList({searchResults}) {
    if(!searchResults.length){
        return null;
    }
  return (
    <div className="absolute border rounded-lg bg-white w-[657.69px] top-14">
            <ul className='w-full'>
              {searchResults.map((s) => (
                <li className="px-3 py-1 hover:bg-gray-100" key={s}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
  )
}

export default SearchList