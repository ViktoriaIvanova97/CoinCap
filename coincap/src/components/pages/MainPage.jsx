import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  lazy,
  Suspense,
} from 'react'
import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectorList, selectorTotal } from '../../RTK/selectors/selectors'
import { getAssets } from '../../api/coincapApi'
import TopAssets from '../shared/TopAssets'
import PortfolioSummary from '../shared/PortfolioSummary'
import TablePage from './TablePage'

const AssetPage = lazy(() => import('./AssetPage'))
const ModalPortfolio = lazy(() => import('../shared/ModalPortfolio'))

const { Header, Content } = Layout

function MainPage() {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const list = useSelector(selectorList)
  const totalSum = useSelector(selectorTotal)

  useEffect(() => {
    dispatch(getAssets())
  }, [dispatch])

  const topAssets = useMemo(() => list.slice(0, 3), [list])

  const openModal = useCallback(() => {
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="header">
        <div className="header-block ">
          <TopAssets assets={topAssets} />
          <PortfolioSummary totalSum={totalSum} onClick={openModal} />
        </div>
      </Header>

      <Content className="main-page-content">
        <Routes>
          <Route path="/" element={<TablePage />} />
          <Route path="/asset/:symbol" element={<AssetPage />} />
        </Routes>
      </Content>

      <Suspense fallback={null}>
        <ModalPortfolio
          open={isModalOpen}
          onOk={closeModal}
          onCancel={closeModal}
        />
      </Suspense>
    </Layout>
  )
}

export default MainPage
