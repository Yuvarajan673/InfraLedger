import LandingLayout from '../layout/LandingLayout'
import BannerImage from '../assets/Banner-image.png'

function Home() {

    const features = [
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 56 56"><path fill="var(--text)" d="M6.086 43.293h14.672l-.633 4.313h-3.21c-1.079 0-1.993.89-1.993 1.992s.914 2.015 1.992 2.015h22.172c1.078 0 1.992-.914 1.992-2.015a2.006 2.006 0 0 0-1.992-1.992h-3.21l-.634-4.313h14.672c4.008 0 6.023-1.922 6.023-6.023V10.41c0-4.101-2.015-6.023-6.023-6.023H6.086C2.078 4.387.6 6.309.6 10.41v26.86c0 4.101 1.478 6.023 5.486 6.023M4.844 32.981c-.703 0-1.008-.282-1.008-1.008V10.48c0-1.665.727-2.32 2.32-2.32h43.688c1.617 0 2.32.655 2.32 2.32v21.492c0 .726-.305 1.008-1.008 1.008ZM28 40.973c-1.172 0-2.18-.985-2.18-2.18c0-1.148 1.008-2.156 2.18-2.156s2.18 1.008 2.18 2.156c0 1.195-1.008 2.18-2.18 2.18" /></svg>,
          title: "Track All Devices",
          description: "Monitor laptops, desktops, and more in one place."
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 16 16"><g fill="var(--text)"><path d="M12.5 16a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m1.679-4.493l-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548l1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0" /><path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" /></g></svg>,
          title: "Assign & Audit",
          description: "Easily assign assets and review usage history."
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 24 24"><path fill="var(--text)" d="m9.25 22l-.4-3.2q-.325-.125-.612-.3t-.563-.375L4.7 19.375l-2.75-4.75l2.575-1.95Q4.5 12.5 4.5 12.338v-.675q0-.163.025-.338L1.95 9.375l2.75-4.75l2.975 1.25q.275-.2.575-.375t.6-.3l.4-3.2h5.5l.4 3.2q.325.125.613.3t.562.375l2.975-1.25l2.75 4.75l-2.575 1.95q.025.175.025.338v.674q0 .163-.05.338l2.575 1.95l-2.75 4.75l-2.95-1.25q-.275.2-.575.375t-.6.3l-.4 3.2zm2.8-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5" /></svg>,
          title: "Asset Status Overview",
          description: "See what's available, assigned, or under maintenance."
        }
    ];




  return (
    <section>
        {/* Banner Part */}
        <div className='flex justify-around items-center h-[588px] bg-(--background)'>
            <div className='flex flex-col gap-[40px]'>
                <h1 className='text-(--text) text-5xl font-bold'> <span className='bg-linear-to-r from-(--primary) to-(--secondary) bg-clip-text text-transparent'> Hardware Asset </span> <br /> Management Made Easy</h1>
                <h3 className='text-(--text) text-[18px] font-medium'>Track, Assign, and Manage Your Hardware Assets <br /> in One Central Platform</h3>
                <div className='flex gap-[30px]'>
                    <button className="bg-(--primary) font-bold text-(--static-text-light) px-[20px] py-[10px] rounded-[5px] cursor-pointer hover:translate-y-[-5px] hover:shadow-[0_15px_30px_var(--accent)] hover:scale-[1.03] transition duration-300">Get Started</button>
                    <button className="font-bold text-(--text) border border-(--primary) px-[20px] py-[10px] rounded-[5px] cursor-pointer hover:bg-(--primary) hover:translate-y-[-5px] hover:shadow-[0_15px_30px_var(--accent)] hover:scale-[1.03] hover:text-white transition duration-300">Watch Demo</button>
                </div>
            </div>
            <div className='h-[450px] w-[650px] overflow-hidden rounded-3xl'>
                <img src={BannerImage} className='h-[500px] w-[650px] object-cover' alt="Banner Image" />
            </div>
        </div>


        {/* Features State Card */}
        <div className='flex justify-around p-[50px] bg-(--background)'>
            { features.map((item,index) => {
                return (
                    <div key={index} className='flex justify-between items-center gap-[40px] p-[35px] px-[50px] w-[400px] rounded-[20px] border border-(--primary) shadow-[0_0_5px_rgba(0,0,0,0.5),5px_5px_var(--primary)] hover:translate-y-[-5px] transition duration-300'>
                        {item.icon}
                        <div className='pointer-events-none'>
                            <h3 className='text-(--text) font-bold text-xl'>{item.title}</h3>
                            <p className='whitespace-pre-line text-(--text)'>{item.description}</p>
                        </div>
                    </div>
                )
            }) }
        </div>

        {/*  */}
    </section>
  )
}

export default Home
