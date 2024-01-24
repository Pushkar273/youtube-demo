import React from 'react'

function ButtonList() {
    const list = ['Music', 'Cricket', 'Soccer', 'National', 'International']
  return (
    <div>
        {list.map(item =><button key={item} className=' px-5 py-2 m-2 rounded-xl border border-black bg-gray-200'>{item}</button>)}

    </div>
  )
}

export default ButtonList