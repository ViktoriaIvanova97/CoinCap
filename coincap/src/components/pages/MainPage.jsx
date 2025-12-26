import React from 'react'
import { Layout, Space } from 'antd'
import TablePage from './TablePage'
import { selectorList,selectorTotal } from '../../RTK/selectors/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getAssets } from '../../api/coincapApi'
import ModalPortfolio from '../shared/ModalPortfolio'

const { Header } = Layout

function MainPage() {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const list = useSelector(selectorList)
  const totalSum = useSelector(selectorTotal)

  const topAssets = list.slice(0, 3)

  useEffect(() => {
    dispatch(getAssets())
  }, [dispatch])

  console.log('list:', list)
  const handleOk = () => {
    // console.log('Добавляем валюту:', selectedAsset)
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const handleAdd = () => {
    setIsModalOpen(true)
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          background: 'rgb(134 140 145)',
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
                {' '}
                <strong>{asset.symbol}:</strong>{' '}
                {Number(asset.priceUsd).toFixed(2)}{' '}
              </div>
            ))}
          </Space>

          <div className="portfolio-block" onClick={handleAdd}>
            Портфель: {totalSum} USD
          </div>
        </div>
      </Header>

      <TablePage />

      <ModalPortfolio
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </Layout>
  )
}

export default MainPage
