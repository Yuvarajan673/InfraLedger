import React from 'react'

function SquareStateCard({ icon, name, count }) {
  return (
    <div className='flex flex-1 flex-col gap-2 shadow-[0_0_2px_rgba(0,0,0,0.5)] w-fit p-[20px] rounded-[10px]'>
        <div className='p-[7px] bg-(--primary) w-fit text-white rounded-[5px]'>
            {icon}
        </div>
        <div>
            <p className='text-(--text)'>{name}</p>
            <h2 className='font-medium text-2xl text-(--text)'>{count}</h2>
        </div>
    </div>
  )
}

export default SquareStateCard
