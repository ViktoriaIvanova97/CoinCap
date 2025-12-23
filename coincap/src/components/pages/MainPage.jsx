import React from 'react'
import { Layout, Space } from 'antd'
import TablePage from './TablePage'
import { selectorList } from '../../RTK/selectors/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAssets } from '../../api/coincapApi'

const { Header } = Layout

function MainPage() {
  const dispatch = useDispatch()
  const list = useSelector(selectorList)

  const topAssets = list.slice(0, 3)

  useEffect(() => {
    dispatch(getAssets())
  }, [dispatch])

  console.log('list:', list)

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
            justifyContent: 'space-between',
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
