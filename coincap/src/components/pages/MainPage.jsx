import React from 'react'
import { Layout, Space } from 'antd'
import TablePage from './TablePage'
import { selectorList , selectorError, selectorStatus} from '../../RTK/selectors/selectors'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getAssets } from '../../api/coincapApi'

const { Header } = Layout

function MainPage() {
  const dispatch = useDispatch()
  const list = useSelector(selectorList)
  const error = useSelector(selectorError)
  const status = useSelector(selectorStatus)

  useEffect(() => {
    dispatch(getAssets()) // ← именно здесь мы "вешаем" вызов
  }, [dispatch])

  console.log('list:', list)
  console.log('error:', error)
  console.log('status:', status)
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
