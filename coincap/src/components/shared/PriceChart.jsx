import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'

function PriceChart({ data }) {
  if (!data.length) return <p>Нет данных для графика</p>

  return (
    <div
      style={{
        width: '800px',
        maxWidth: '100%',
        height: 250,
        margin: '0 auto',
      }}
    >
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
}

export default PriceChart
