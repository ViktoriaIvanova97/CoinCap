import React, { useEffect, useState } from 'react'
import { Layout, Space } from 'antd'
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectorList, selectorTotal } from '../../RTK/selectors/selectors'
import { getAssets } from '../../api/coincapApi'
import TablePage from './TablePage'
import AssetPage from './AssetPage'
import ModalPortfolio from '../shared/ModalPortfolio'

const { Header, Content } = Layout

function MainPage() {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const list = useSelector(selectorList)
  const totalSum = useSelector(selectorTotal)

  const topAssets = list.slice(0, 3)

  useEffect(() => {
    dispatch(getAssets())
  }, [dispatch])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          background: 'rgb(58 25 39 / 83%)',
          padding: '0 20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Space size="large">
            {topAssets.map((asset) => (
              <div key={asset.id} style={{ color: 'rgb(0 0 0 / 69%)' }}>
                <strong>{asset.symbol}:</strong>{' '}
                {Number(asset.priceUsd).toFixed(2)}
              </div>
            ))}
          </Space>

          <div className="portfolio-block" onClick={() => setIsModalOpen(true)}>
            Портфель: {totalSum} USD
          </div>
        </div>
      </Header>

      <Content style={{ marginTop: 64, padding: '20px', width: '100%' }}>
        <Routes>
          <Route path="/" element={<TablePage />} />
          <Route path="/asset/:symbol" element={<AssetPage />} />
        </Routes>
      </Content>

      <ModalPortfolio
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
      />
    </Layout>
  )
}

export default MainPage
