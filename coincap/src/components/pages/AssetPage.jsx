import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useMemo } from 'react'
import { Button, Table } from 'antd'
import { selectorHistory, selectorList } from '../../RTK/selectors/selectors'
import { formatCurrency } from '../shared/formatCurrency'
import BuyForm from '../shared/BuyForm'
import PriceChart from '../shared/PriceChart'
import { getAssetHistory } from '../../api/coincapApi'

function AssetPage() {
  const { symbol } = useParams()
  const list = useSelector(selectorList)
  const history = useSelector(selectorHistory)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const asset = useMemo(
    () => list.find((a) => a.symbol === symbol),
    [list, symbol]
  )

  useEffect(() => {
    if (asset) {
      dispatch(getAssetHistory({ id: asset.id, interval: 'h1' }))
    }
  }, [asset, dispatch])

  const chartData = useMemo(() => {
    if (!Array.isArray(history)) return []

    return history.map((p) => ({
      time: new Date(p.time).toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      price: Number(p.priceUsd),
    }))
  }, [history])

  if (!asset) return <p>Валюта не найдена</p>

  const infoData = useMemo(
    () => [
      {
        key: '1',
        label: 'Доступное предложение для торговли',
        value: `${Number(asset.supply).toLocaleString()} ${asset.symbol}`,
      },
      {
        key: '2',
        label: 'Общие объемы выпущенных',
        value: `${Number(asset.maxSupply).toLocaleString()} ${asset.symbol}`,
      },
      {
        key: '3',
        label: 'Объем торгов за 24ч',
        value: formatCurrency(asset.volumeUsd24Hr),
      },
      {
        key: '4',
        label: 'Средняя цена за объем (24ч)',
        value: formatCurrency(asset.vwap24Hr),
      },
      {
        key: '5',
        label: 'Изменение цены (24ч)',
        value: `${Number(asset.changePercent24Hr).toFixed(2)}%`,
      },
      {
        key: '6',
        label: 'Сайт',
        value: (
          <a href={asset.explorer} target="_blank" rel="noopener noreferrer">
            {asset.explorer}
          </a>
        ),
      },
    ],
    [asset]
  )

  const columns = [
    { title: 'Параметр', dataIndex: 'label', key: 'label' },
    { title: 'Значение', dataIndex: 'value', key: 'value' },
  ]

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <h1 style={{ marginBottom: '20px' }}>{asset.name}</h1>

      <div style={{ width: '300px', marginBottom: '20px' }}>
        <BuyForm asset={asset} />
      </div>

      <Table
        columns={columns}
        dataSource={infoData}
        pagination={false}
        bordered
        size="small"
        style={{ width: '1000px', margin: '0 auto 20px auto' }}
      />
      <PriceChart data={chartData} />

      <Button type="primary" onClick={() => navigate('/')}>
        Назад
      </Button>
    </div>
  )
}

export default React.memo(PriceChart)
