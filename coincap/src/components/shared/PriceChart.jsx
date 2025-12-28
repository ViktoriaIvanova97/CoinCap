import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'

const PriceChart = React.memo(function PriceChart({ data }) {
  if (!data.length) return <p>Нет данных для графика</p>

  return (
    <div className="price-chart-block">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#f0f0f0" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#1890ff" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
})
export default PriceChart
