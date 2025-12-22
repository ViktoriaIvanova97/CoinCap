import React from 'react'
import { Layout, Table } from 'antd'

const { Content } = Layout

const columns = [
  { title: 'Abbr', dataIndex: 'abbr', key: 'abbr' },
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'VWAP (24H)', dataIndex: 'vwap24Hr', key: 'vwap24Hr' },
  { title: 'Change(24H)', dataIndex: 'change24Hr', key: 'change24Hr' },
  { title: 'Market Cap', dataIndex: 'marketCapUsd', key: 'marketCapUsd' },
  { title: 'Price', dataIndex: 'priceUsd', key: 'priceUsd' },
]

const data = []

function TablePage() {
  return (
    <Content style={{ padding: '20px' }}>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="abbr"
        bordered
        locale={{ emptyText: 'Данные загружаются...' }}
      />
    </Content>
  )
}

export default TablePage
