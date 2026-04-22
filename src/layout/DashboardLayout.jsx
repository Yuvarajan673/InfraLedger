import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import lightLogo from "../assets/light-logo-2.png"
import profile from "../assets/ChatGPT.png"
import { Outlet, Link } from 'react-router-dom'

function Dashboard() {

  const [ showPaper, setShowPaper ] = useState(false)

  const handleShowPaper = () => {
    setShowPaper(!showPaper)
  }


  return (
    <>
      <div className='flex flex-col'>
          {/* NAVBAR */}
          <div className='flex justify-between p-[7px] pl-[30px] px-[15px] w-[100%] sticky top-0 bg-(--background)'>
              <div className="flex justify-center items-center">
                <img className="h-[20px] mr-1" src={lightLogo} alt="" />
                <h1 className="font-bold text-[20px] text-(--text)">
                  <span className="text-(--primary)">Infra</span>
                  Ledger
                </h1>
            </div>

            <div className='flex items-center gap-[20px]'>
              <div className='cursor-pointer p-[10px] rounded-[50%] text-(--text) hover:bg-gray-200 transition-colors duration-500'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19q-.425 0-.712-.288T4 18t.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2t1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h1q.425 0 .713.288T20 18t-.288.713T19 19zm7 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-4-5h8v-7q0-1.65-1.175-2.825T12 6T9.175 7.175T8 10z" /></svg>
              </div>
              
              <div className='h-[70%] w-[1.6px] bg-(--primary)'></div>

              {/* User Profile */}
              <div className='relative'>
                <div className='flex items-center gap-[10px] hover:bg-gray-200 transition-colors duration-500 p-[10px] px-[10px] rounded-[5px] cursor-pointer' onClick={handleShowPaper}>
                  <div className='text-end'>
                    <h4 className='text-[13.5px] font-medium leading-[15px] text-(--text)'>James Wilson</h4>
                    <p className='text-[12px] text-(--text)'>IT Operations</p>
                  </div>
                  <div className='relative'>
                    <div className='h-[34px] w-[34px] overflow-hidden rounded-[50%]'>
                      <img className='h-[100%] w-[100%] object-cover object-center' src={profile} alt="Profile Image" />
                    </div>
                    <div className='w-[13px] h-[13px] rounded-[50%] bg-(--primary) absolute right-[-3px] top-[23px] border-[1.5px] border-white'></div>
                  </div>
                </div>
                <AnimatePresence>
                { showPaper && 
                <motion.div
                initial = {{ opacity: 0 }}
                animate = {{ opacity: 1 }}
                exit = {{ opacity: 0 }}
                transition = {1}
                className='absolute top-[60px] left-[-10px] bg-(--background) p-[5px] rounded-[8px] w-[150px] shadow-[0_0_10px_2px_rgba(0,0,0,0.2)]'>
                    <button className='flex items-center gap-[6px] px-[14px] py-[7px] rounded-[5px] cursor-pointer hover:bg-(--primary) hover:text-white w-full text-start'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 5.4A1.4 1.4 0 0 1 5.4 4h6.2A1.4 1.4 0 0 1 13 5.4V8a1 1 0 1 0 2 0V5.4A3.4 3.4 0 0 0 11.6 2H5.4A3.4 3.4 0 0 0 2 5.4v13.2A3.4 3.4 0 0 0 5.4 22h6.2a3.4 3.4 0 0 0 3.4-3.4V16a1 1 0 1 0-2 0v2.6a1.4 1.4 0 0 1-1.4 1.4H5.4A1.4 1.4 0 0 1 4 18.6z" /><path fill="currentColor" d="M17.293 8.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 13H7a1 1 0 1 1 0-2h11.586l-1.293-1.293a1 1 0 0 1 0-1.414" /></svg>
                      Logout
                    </button>
                </motion.div>
                }
                </AnimatePresence>
              </div>
            </div>
          </div>

        <div className='flex '>
          {/* SIDEBAR */}
          <div className='flex flex-col items-center gap-[20px] p-[15px] w-fit h-[calc(100vh-68px)] sticky top-[68px] bg-(--background)'>
            <div className='w-[150px] flex flex-col gap-1.5'>
                <Link to="/dashboard" className='flex items-center text-(--text) gap-[5px] px-[10px] py-[6px] font-medium hover:bg-(--primary) hover:text-white transition-colors duration-200 rounded-[5px] cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M13 8V4q0-.425.288-.712T14 3h6q.425 0 .713.288T21 4v4q0 .425-.288.713T20 9h-6q-.425 0-.712-.288T13 8M3 12V4q0-.425.288-.712T4 3h6q.425 0 .713.288T11 4v8q0 .425-.288.713T10 13H4q-.425 0-.712-.288T3 12m10 8v-8q0-.425.288-.712T14 11h6q.425 0 .713.288T21 12v8q0 .425-.288.713T20 21h-6q-.425 0-.712-.288T13 20M3 20v-4q0-.425.288-.712T4 15h6q.425 0 .713.288T11 16v4q0 .425-.288.713T10 21H4q-.425 0-.712-.288T3 20m2-9h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5zm4-2" /></svg>
                    Overview
                </Link>
                <Link to="/dashboard/assets" className='flex items-center text-(--text) gap-[5px] px-[10px] py-[6px] font-medium hover:bg-(--primary) hover:text-white transition-colors duration-200 rounded-[5px] cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><rect width="18.5" height="7.5" x="2.75" y="2.751" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="2" /><circle cx="6.25" cy="6.501" r="1.25" fill="currentColor" /><circle cx="10.25" cy="6.501" r="1.25" fill="currentColor" /><rect width="18.5" height="7.5" x="2.75" y="13.749" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="2" /><circle cx="6.25" cy="17.499" r="1.25" fill="currentColor" /><circle cx="10.25" cy="17.499" r="1.25" fill="currentColor" /></g></svg>
                    Assets
                </Link>
                <Link to="/dashboard/audits" className='flex items-center text-(--text) gap-[5px] px-[10px] py-[6px] font-medium hover:bg-(--primary) hover:text-white transition-colors duration-200 rounded-[5px] cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21q-.825 0-1.412-.587T2 19V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v14q0 .825-.587 1.413T20 21zm0-2h16V5H4zm1-2h5v-2H5zm9.55-2l4.95-4.95l-1.425-1.425l-3.525 3.55l-1.425-1.425l-1.4 1.425zM5 13h5v-2H5zm0-4h5V7H5zM4 19V5z" /></svg>
                    Audits
                </Link>
                <Link to="/dashboard/reports" className='flex items-center text-(--text) gap-[5px] px-[10px] py-[6px] font-medium hover:bg-(--primary) hover:text-white transition-colors duration-200 rounded-[5px] cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v16a2 2 0 0 0 2 2h16m-3-4V9m-5 8V5M8 17v-3" /></svg>
                    Reports
                </Link>
                <Link to="/dashboard/settings" className='flex items-center text-(--text) gap-[5px] px-[10px] py-[6px] font-medium hover:bg-(--primary) hover:text-white transition-colors duration-200 rounded-[5px] cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46a.5.5 0 0 0-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65A.49.49 0 0 0 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1a.6.6 0 0 0-.18-.03c-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1q.09.03.18.03c.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64zm-1.98-1.71c.04.31.05.52.05.73s-.02.43-.05.73l-.14 1.13l.89.7l1.08.84l-.7 1.21l-1.27-.51l-1.04-.42l-.9.68c-.43.32-.84.56-1.25.73l-1.06.43l-.16 1.13l-.2 1.35h-1.4l-.19-1.35l-.16-1.13l-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7l-1.06.43l-1.27.51l-.7-1.21l1.08-.84l.89-.7l-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13l-.89-.7l-1.08-.84l.7-1.21l1.27.51l1.04.42l.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43l.16-1.13l.2-1.35h1.39l.19 1.35l.16 1.13l1.06.43c.43.18.83.41 1.23.71l.91.7l1.06-.43l1.27-.51l.7 1.21l-1.07.85l-.89.7zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4m0 6c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2" /></svg>
                    Settings
                </Link>
            </div>
          </div>

          {/* OUTLET CONTENT */}
          <div className='flex-1 p-[30px] h-[calc(100vh-68px)] overflow-y-auto border-l-[1.5px] border-t-[1.5px] border-(--primary) rounded-tl-[20px]'>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Dashboard
