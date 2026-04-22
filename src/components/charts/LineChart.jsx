import { Line } from "react-chartjs-2";

function LineChart() {

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: "Revenue",
            data: [12000, 19000, 3000, 5000, 2000, 3000],
            backgroundColor: 'green',
            borderRadius: 4,
            borderColor: 'green', // Makes it look modern
            tension: 0.4,
            pointRadius: 0,
          },
          {
            label: "Revenue",
            data: [3000, 5000, 5000, 20000, 4000, 19000],
            backgroundColor: 'red',
            borderRadius: 4,
            borderColor: 'red', // Makes it look modern
            tension: 0.4,
            pointRadius: 0,
          }
        ],
    };

  return (
    <div className='flex flex-col gap-[30px] shadow-[0_0_2px_rgba(0,0,0,0.5)] w-fit rounded-[10px]'>
        <div className='border-b border-(--border) p-[20px]'>
            <h3 className="font-medium text-(--text)">Assets Lifecycle Trends</h3>
            <p className="text-[13px] text-(--text)">Monthly growth vs decommisssioning rates</p>
        </div>
        <div className='h-[400px] w-[800px] relative p-[20px]'>
            <Line data={chartData} />
        </div>
    </div>
  )
}

export default LineChart
