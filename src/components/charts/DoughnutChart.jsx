import { Doughnut } from "react-chartjs-2"

function DoughnutChart() {

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [
          {
            label: 'Performance',
            data:[1244,3443,1221,4342],
            backgroundColor: 'green'
          }
        ]
    }

  return (
    <div className='shadow-[0_0_2px_rgba(0,0,0,0.5)] w-full flex-1 rounded-[10px]'>
      <div className="p-[20px] border-b border-(--border)">
          <h3 className="font-medium text-(--text)">Status Distribution</h3>
          <p className="text-[13px] text-(--text)">Current health of inventory</p>
      </div>
      <div className='h-[400px] p-[20px]'>
        <Doughnut data={chartData}/>
      </div>
    </div>
  )
}

export default DoughnutChart
