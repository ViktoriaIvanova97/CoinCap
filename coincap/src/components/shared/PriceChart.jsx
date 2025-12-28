import React, { useMemo } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'

const PriceChart = React.memo(function PriceChart({ data = [] }) {
  const chartData = useMemo(() => data, [data])

  const hasData = chartData.length > 0

  return (
    <div className="price-chart-block" style={{ width: '100%', height: 300 }}>
      {hasData ? (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid stroke="#f0f0f0" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#1890ff"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>Нет данных для графика</p>
      )}
    </div>
  )
})

export default PriceChart
