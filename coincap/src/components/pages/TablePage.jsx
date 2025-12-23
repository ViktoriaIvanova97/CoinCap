import React from 'react'
import { useState } from 'react'
import { Layout, Table } from 'antd'
import { useSelector } from 'react-redux'
import { selectorList } from '../../RTK/selectors/selectors'
import { formatCurrency } from '../shared/formatCurrency'
import ModalBuy from '../shared/ModalBuy'

const { Content } = Layout

const columnsBase = [
  { title: 'Rank', dataIndex: 'rank', key: 'rank' },
  { title: 'Abbr', dataIndex: 'abbr', key: 'abbr' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'VWAP (24H)', dataIndex: 'vwap24Hr', key: 'vwap24Hr' },
  {
    title: 'Change(24H)',
    dataIndex: 'change24Hr',
    key: 'change24Hr',
    render: (text) => {
      const value = parseFloat(text)
      const isNegative = value < 0
      const color = isNegative ? 'red' : 'green'
      return <span style={{ color }}>{text}</span>
    },
  },
  { title: 'Market Cap', dataIndex: 'marketCapUsd', key: 'marketCapUsd' },
  { title: 'Price', dataIndex: 'priceUsd', key: 'priceUsd' },
]

function TablePage() {
  const list = useSelector(selectorList)

  const [isModalBuyOpen, setIsModalBuyOpen] = useState(false)
  const [selectedAsset, setSelectedAsset] = useState(null)

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

  const handleAdd = (asset) => {
    setSelectedAsset(asset)
    setIsModalBuyOpen(true)
  }
  const handleOk = () => {
    console.log('Добавляем валюту:', selectedAsset)
    setIsModalBuyOpen(false)
  }
  const handleCancel = () => {
    setIsModalBuyOpen(false)
  }

  const columns = [
    ...columnsBase,
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <button
          style={{
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            fontSize: '18px',
            color: 'blue',
          }}
          onClick={() => handleAdd(record)}
        >
          +
        </button>
      ),
    },
  ]
  return (
    <div style={{ maxHeight: '64px' }}>
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
        <ModalBuy
          open={isModalBuyOpen}
          asset={selectedAsset}
          onOk={handleOk}
          onCancel={handleCancel}
        />
      </Content>
    </div>
  )
}

export default TablePage
