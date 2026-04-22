import LineChart from '../components/charts/LineChart.jsx'
import DoughnutChart from '../components/charts/DoughnutChart.jsx'
import SquareStateCard from '../components/SquareStateCard.jsx'




function Overview() {

    const stateCardData = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2l-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504L1.508 9.071l2.742 1.567l2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134l2.75 1.571v-3.134L8.5 9.933zm.508-3.996l2.742 1.567l2.742-1.567l-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643L8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" /></svg>,
            name: "Total Managed Assets",
            count: "1,248"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="currentColor" d="M28 16v6H4V6h12V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-6ZM18 28h-4v-4h4Z" /><path fill="currentColor" d="m21 15l-5-4.96l1.59-1.57L21 11.85l7.41-7.35L30 6.08z" /></svg>,
            name: "Active Assignments",
            count: "1,024"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2l-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504L1.508 9.071l2.742 1.567l2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134l2.75 1.571v-3.134L8.5 9.933zm.508-3.996l2.742 1.567l2.742-1.567l-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643L8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" /></svg>,
            name: "Pending Maintenance",
            count: "84"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><path stroke-linejoin="round" d="M19 11v-1c0-3.771 0-5.657-1.172-6.828S14.771 2 11 2S5.343 2 4.172 3.172S3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22" /><path d="m21 22l-1.714-1.714m.571-2.857a3.429 3.429 0 1 1-6.857 0a3.429 3.429 0 0 1 6.857 0Z" /><path stroke-linejoin="round" d="M7 7h8m-8 4h4" /></g></svg>,
            name: "Audit Readiness",
            count: "98.2"
        },
    ]
    
  return (
    <div className='flex flex-col gap-[30px]'>

        <div>
          <h1 className='text-3xl font-medium text-(--text)'>Executive Dashboard</h1>
          <p className='text-(--text)'>Real-time status of 1,248 hardware assets across 4 global regions.</p>
        </div>

        <div className='flex justify-between gap-[30px]'>
            { stateCardData.map((item, index) => <SquareStateCard key={index} icon={item.icon} name={item.name} count={item.count}/> ) }
        </div>

        <div className='flex gap-[30px]'>
            <LineChart />
            <DoughnutChart />
        </div>

        <div className='flex gap-[30px]'>

            <div className='w-[800px] shadow-[0_0_2px_rgba(0,0,0,0.5)] rounded-[10px] '>
                <div className='flex justify-between p-[20px] border-b border-(--border)'>
                    <h3 className='font-medium text-(--text)'>Recent Asset Updates</h3>
                    <p className='text-[13px] text-(--primary) cursor-pointer'>View All Assets</p>
                </div>
                <div className='h-[400px]'>
                    <table className='w-full'>
                        <thead className='border-b border-(--border) text-center cursor-pointer'>
                            <tr>
                                <th className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>Asset ID</th>
                                <th className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>Hardware Item</th>
                                <th className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>Assigned To</th>
                                <th className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>Status</th>
                                <th className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>Last Sync</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b border-(--border) text-center'>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--primary)'>AST-9402</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>MacBook Pro M3 14"</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>Alex Rivera</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>
                                    <span className='bg-(--primary) py-[5px] px-[10px] rounded-[30px] text-white'>Assigned</span>
                                    </td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>2 mins ago</td>
                            </tr>
                            <tr className='border-b border-(--border) text-center'>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--primary)'>AST-9402</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>MacBook Pro M3 14"</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>Alex Rivera</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>
                                    <span className='bg-(--primary) py-[5px] px-[10px] rounded-[30px] text-white'>Assigned</span>
                                    </td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>2 mins ago</td>
                            </tr>
                            <tr className='border-b border-(--border) text-center'>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--primary)'>AST-9402</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>MacBook Pro M3 14"</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>Alex Rivera</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>
                                    <span className='bg-(--primary) py-[5px] px-[10px] rounded-[30px] text-white'>Assigned</span>
                                    </td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>2 mins ago</td>
                            </tr>
                            <tr className='border-b border-(--border) text-center'>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--primary)'>AST-9402</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>MacBook Pro M3 14"</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>Alex Rivera</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>
                                    <span className='bg-(--primary) py-[5px] px-[10px] rounded-[30px] text-white'>Assigned</span>
                                    </td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>2 mins ago</td>
                            </tr>
                            <tr className='border-b border-(--border) text-center'>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--primary)'>AST-9402</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>MacBook Pro M3 14"</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>Alex Rivera</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>
                                    <span className='bg-(--primary) py-[5px] px-[10px] rounded-[30px] text-white'>Assigned</span>
                                    </td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>2 mins ago</td>
                            </tr>
                            <tr className='border-b border-(--border) text-center'>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--primary)'>AST-9402</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>MacBook Pro M3 14"</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>Alex Rivera</td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>
                                    <span className='bg-(--primary) py-[5px] px-[10px] rounded-[30px] text-white'>Assigned</span>
                                    </td>
                                <td className='font-normal text-[14px] p-[15px] px-[25px] text-(--text)'>2 mins ago</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='flex-1 shadow-[0_0_2px_rgba(0,0,0,0.5)] rounded-[10px] '>
                <div className='p-[20px] border-b border-(--border)'>
                    <h3 className='font-medium text-(--text)'>Activity Stream</h3>
                </div>
                <div className='h-[400px]'></div>
            </div>

        </div>
    </div>
  )
}

export default Overview
