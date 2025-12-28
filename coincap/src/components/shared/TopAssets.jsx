import React from 'react'
import { Space } from 'antd'


function TopAssets({assets}) {
  return (
    <Space size="large">
      {assets.map((asset) => (
        <div key={asset.id} style={{ color: 'rgb(0 0 0 / 69%)' }}>
          <strong>{asset.symbol}:</strong> {Number(asset.priceUsd).toFixed(2)}
        </div>
      ))}
    </Space>
  )
}
export default React.memo(TopAssets) 
