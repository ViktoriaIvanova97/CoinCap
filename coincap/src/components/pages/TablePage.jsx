import React from 'react'
import { Layout, Table } from 'antd'
import { useSelector } from 'react-redux'
import { selectorList } from '../../RTK/selectors/selectors'
import { formatCurrency } from '../shared/formatCurrency'

const { Content } = Layout

const columns = [
  { title: 'Rank', dataIndex: 'rank', key: 'rank' },
  { title: 'Abbr', dataIndex: 'abbr', key: 'abbr' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'VWAP (24H)', dataIndex: 'vwap24Hr', key: 'vwap24Hr' },
  { title: 'Change(24H)', dataIndex: 'change24Hr', key: 'change24Hr' },
  { title: 'Market Cap', dataIndex: 'marketCapUsd', key: 'marketCapUsd' },
  { title: 'Price', dataIndex: 'priceUsd', key: 'priceUsd' },
]

function TablePage() {
  const list = useSelector(selectorList)

  const data = list.map((asset) => ({
    rank: asset.rank,
    abbr: asset.symbol,
    name: asset.name,
    vwap24Hr: formatCurrency(asset.vwap24Hr),
    change24Hr: asset.changePercent24Hr
      ? Number(asset.changePercent24Hr).toFixed(2) + '%'
      : '—',
    marketCapUsd: formatCurrency(asset.marketCapUsd),
    priceUsd: formatCurrency(asset.priceUsd),
  }))

  return (
    <div style={{ maxHeight: '64px', }}>
      <Content
        style={{
          padding: '66px 20px',
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          rowKey="id"
          bordered
          locale={{ emptyText: 'Данные загружаются...' }}
        />
      </Content>
    </div>
  )
}

export default TablePage
