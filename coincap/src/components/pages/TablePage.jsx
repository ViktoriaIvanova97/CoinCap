import React, { useState, useMemo, useCallback } from 'react'
import { Table } from 'antd'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectorList } from '../../RTK/selectors/selectors'
import { formatCurrency } from '../shared/formatCurrency'
import ModalBuy from '../shared/ModalBuy'

function TablePage() {
  const list = useSelector(selectorList)
  const navigate = useNavigate()

  const [isModalBuyOpen, setIsModalBuyOpen] = useState(false)
  const [selectedAsset, setSelectedAsset] = useState(null)

  const openBuyModal = useCallback((asset) => {
    setSelectedAsset(asset)
    setIsModalBuyOpen(true)
  }, [])

  const closeBuyModal = useCallback(() => {
    setIsModalBuyOpen(false)
  }, [])

  const handleRowClick = useCallback(
    (record) => {
      navigate(`/asset/${record.abbr}`)
    },
    [navigate]
  )

  const data = useMemo(
    () =>
      list.map((asset) => ({
        key: asset.id,
        rank: asset.rank,
        abbr: asset.symbol,
        name: asset.name,
        vwap24Hr: formatCurrency(asset.vwap24Hr),
        change24Hr: asset.changePercent24Hr
          ? Number(asset.changePercent24Hr).toFixed(2) + '%'
          : '—',
        marketCapUsd: formatCurrency(asset.marketCapUsd),
        priceUsd: formatCurrency(asset.priceUsd),
      })),
    [list]
  )

  const columns = useMemo(
    () => [
      { title: 'Rank', dataIndex: 'rank' },
      { title: 'Abbr', dataIndex: 'abbr' },
      { title: 'Name', dataIndex: 'name' },
      { title: 'VWAP (24H)', dataIndex: 'vwap24Hr' },
      {
        title: 'Change (24H)',
        dataIndex: 'change24Hr',
        render: (text) => (
          <span style={{ color: text.startsWith('-') ? 'red' : 'green' }}>
            {text}
          </span>
        ),
      },
      { title: 'Market Cap', dataIndex: 'marketCapUsd' },
      { title: 'Price', dataIndex: 'priceUsd' },
      {
        title: '',
        render: (_, record) => (
          <button
            style={{
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
            }}
            onClick={(e) => {
              e.stopPropagation()
              openBuyModal(record)
            }}
          >
            +
          </button>
        ),
      },
    ],
    [openBuyModal]
  )

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10, showSizeChanger: false }}
        bordered
        style={{ width: '100%' }}
        scroll={{ x: 'max-content' }}
        rowClassName={() => 'clickable-row'}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
      />

      <ModalBuy
        open={isModalBuyOpen}
        asset={selectedAsset}
        onOk={closeBuyModal}
        onCancel={closeBuyModal}
      />
    </>
  )
}

export default TablePage
