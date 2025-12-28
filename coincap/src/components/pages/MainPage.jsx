import React, { useEffect, useState, useMemo, useCallback } from 'react'
import { Layout } from 'antd'
import { Routes, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectorList, selectorTotal } from '../../RTK/selectors/selectors'
import { getAssets } from '../../api/coincapApi'
import TablePage from './TablePage'
import AssetPage from './AssetPage'
import ModalPortfolio from '../shared/ModalPortfolio'
import TopAssets from '../shared/TopAssets'
import PortfolioSummary from '../shared/PortfolioSummary'

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

      <ModalPortfolio
        open={isModalOpen}
        onOk={closeModal}
        onCancel={closeModal}
      />
    </Layout>
  )
}

export default MainPage
