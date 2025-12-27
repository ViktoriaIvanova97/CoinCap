import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectorList } from '../../RTK/selectors/selectors'
import { formatCurrency } from '../shared/formatCurrency'

function AssetPage() {
  const { symbol } = useParams()
  const list = useSelector(selectorList)
  const asset = list.find((a) => a.symbol === symbol)

  if (!asset) return <p>Валюта не найдена</p>

  return (
    <div style={{ padding: '20px' }}>
      <h1>{asset.name} ({asset.symbol})</h1>
      <p>Цена: {formatCurrency(asset.priceUsd)}</p>
      <p>Капитализация: {formatCurrency(asset.marketCapUsd)}</p>
      <p>VWAP (24H): {formatCurrency(asset.vwap24Hr)}</p>
      <p>Изменение (24ч): {Number(asset.changePercent24Hr).toFixed(2)}%</p>
    </div>
  )
}

export default AssetPage
