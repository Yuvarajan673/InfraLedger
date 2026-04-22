import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  ArcElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

ChartJS.defaults.responsive = true;
ChartJS.defaults.maintainAspectRatio = false;