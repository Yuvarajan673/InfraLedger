import React from 'react'

function ButtonOutlined({value}) {
  return (
    <button className="text-(--primary) border border-(--primary) px-[20px] py-[7px] rounded-[5px] cursor-pointer hover:bg-(--primary) hover:text-white transition-colors duration-300">
        {value}
    </button>
  )
}

export default ButtonOutlined
