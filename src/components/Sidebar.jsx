import React from 'react'
import lightLogo from "../assets/light-logo-2.png";

function Sidebar() {
  return (
    <>
      <div className='flex flex-col items-center gap-[20px] p-[15px] w-fit h-[100vh] p border-r-[1.5px] border-(--border)'>
        <div className="flex justify-center items-center">
            <img className="h-[20px] mr-1" src={lightLogo} alt="" />
            <h1 className="font-bold text-[20px] text-(--text)">
              <span className="text-(--primary)">Infra</span>
              Ledger
            </h1>
        </div>
        <ul className='w-[200px] flex flex-col gap-1.5'>
            <li className='flex items-center gap-[5px] px-[10px] py-[6px] text-(--text) font-medium hover:bg-(--primary) hover:text-white rounded-[5px] cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M13 8V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9h-6q-.425 0-.712-.288T13 8M3 12V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v8q0 .425-.288.713T10 13H4q-.425 0-.712-.288T3 12m10 8v-8q0-.425.288-.712T14 11h6q.425 0 .713.288T21 12v8q0 .425-.288.713T20 21h-6q-.425 0-.712-.288T13 20M3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21H4q-.425 0-.712-.288T3 20m2-9h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5zm4-2" /></svg>
                Overview
            </li>
            <li className='flex items-center gap-[5px] px-[10px] py-[6px] text-(--text) font-medium hover:bg-(--primary) hover:text-white rounded-[5px] cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><rect width="18.5" height="7.5" x="2.75" y="2.751" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="2" /><circle cx="6.25" cy="6.501" r="1.25" fill="currentColor" /><circle cx="10.25" cy="6.501" r="1.25" fill="currentColor" /><rect width="18.5" height="7.5" x="2.75" y="13.749" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="2" /><circle cx="6.25" cy="17.499" r="1.25" fill="currentColor" /><circle cx="10.25" cy="17.499" r="1.25" fill="currentColor" /></g></svg>
                Assets
            </li>
            <li className='flex items-center gap-[5px] px-[10px] py-[6px] text-(--text) font-medium hover:bg-(--primary) hover:text-white rounded-[5px] cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm0-2h16V5H4zm1-2h5v-2H5zm9.55-2l4.95-4.95l-1.425-1.425l-3.525 3.55l-1.425-1.425l-1.4 1.425zM5 13h5v-2H5zm0-4h5V7H5zM4 19V5z" /></svg>
                Audits
            </li>
            <li className='flex items-center gap-[5px] px-[10px] py-[6px] text-(--text) font-medium hover:bg-(--primary) hover:text-white rounded-[5px] cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v16a2 2 0 0 0 2 2h16m-3-4V9m-5 8V5M8 17v-3" /></svg>
                Reports
            </li>
            <li className='flex items-center gap-[5px] px-[10px] py-[6px] text-(--text) font-medium hover:bg-(--primary) hover:text-white rounded-[5px] cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.6.6 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1q.09.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64zm-1.98-1.71c.04.31.05.52.05.73s-.02.43-.05.73l-.14 1.13l.89.7l1.08.84l-.7 1.21l-1.27-.51l-1.04-.42l-.9.68c-.43.32-.84.56-1.25.73l-1.06.43l-.16 1.13l-.2 1.35h-1.4l-.19-1.35l-.16-1.13l-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7l-1.06.43l-1.27.51l-.7-1.21l1.08-.84l.89-.7l-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13l-.89-.7l-1.08-.84l.7-1.21l1.27.51l1.04.42l.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43l.16-1.13l.2-1.35h1.39l.19 1.35l.16 1.13l1.06.43c.43.18.83.41 1.23.71l.91.7l1.06-.43l1.27-.51l.7 1.21l-1.07.85l-.89.7zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2" /></svg>
                Settings
            </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar