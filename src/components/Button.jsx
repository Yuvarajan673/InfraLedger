import React from 'react'

function Button({type, value, onClick}) {
  return (
    <button type={type} className="text-(--text) px-[20px] py-[7px] rounded-[5px] text-white bg-(--primary) cursor-pointer" onClick={onClick}>
        {value}
    </button>
  )
}

export default Button
