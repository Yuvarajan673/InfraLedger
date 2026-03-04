import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import lightLogo from '../assets/light-logo-2.png'
import darkLogo from '../assets/dark-logo-2.png'


function Navbar() {

  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('dark'))


  console.log(typeof darkTheme)
  useEffect(() => {
    localStorage.setItem('dark',darkTheme)
    document.documentElement.setAttribute('data-theme', localStorage.getItem('dark'));
  },[darkTheme])


  return (
    <nav className='flex justify-between items-center p-[10px] px-[25px] bg-(--primary) border-b border-b-(--primary)'>
      <Link to='/'>
        <div className="flex justify-center items-center gap-[5px]">
          <img className="h-[25px]" src={darkLogo} alt="" />
          <h1 className="font-bold text-[22px] text-(--static-text-light)">
            <span className="bg-(--static-text-light) text-(--primary) px-1 rounded-[5px]">Infra</span>
            Ledger
          </h1>
        </div>
      </Link>
      <ul className='flex gap-14 text-(--static-text-light) font-bold'>
        <Link to="/features">
          <li className="px-[15px] py-1.75 hover:text-(--primary) transition duration-300 cursor-pointer">Features</li>
        </Link>
        <li className="px-[15px] py-[7px] hover:text-(--primary) transition duration-300 cursor-pointer">About</li>
        <li className="px-[15px] py-[7px] hover:text-(--primary) transition duration-300 cursor-pointer">Demo</li>
        <li className="px-3.75 py-1.75 hover:text-(--primary) transition duration-300 cursor-pointer">Contact</li>
        <button className="bg-(--static-text-light) text-(--static-text-black) p-[10px] rounded-[50%] flex justify-center items-center cursor-pointer" onClick={() => setDarkTheme(!darkTheme)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-2V4a8 8 0 1 1 0 16" /></svg>
        </button>
      </ul>
    </nav>
  )
}

export default Navbar
