import React from 'react'
import { Layout, Space } from 'antd'
import TablePage from './TablePage'

const { Header } = Layout

function MainPage() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: 'rgb(134 140 145)', padding: '0 20px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Space size="large">
            <div style={{ color: 'rgb(0 0 0 / 69%)' }}>
              <strong>BTC:</strong> —
            </div>
            <div style={{ color: 'rgb(0 0 0 / 69%)' }}>
              <strong>ETH:</strong> —
            </div>
            <div style={{ color: 'rgb(0 0 0 / 69%)' }}>
              <strong>USDT:</strong> —
            </div>
          </Space>

          <div style={{ color: 'rgb(0 0 0 / 69%)', fontWeight: 'bold' }}>
            Портфель: — USD
          </div>
        </div>
      </Header>

      <TablePage />
    </Layout>
  )
}

export default MainPage
