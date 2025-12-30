import React, { useState, useEffect } from 'react'
import { Input, Button , message} from 'antd'
import { useDispatch } from 'react-redux'
import { addCurrency } from '../../RTK/slices/portfolioSlice'

function BuyForm({ asset, onComplete }) {
  const [quantity, setQuantity] = useState('')
  const [total, setTotal] = useState(0)

  const dispatch = useDispatch()

  useEffect(() => {
    if (asset && quantity) {
      const price = parseFloat(asset.priceUsd)
      const qty = parseFloat(quantity)
      if (!isNaN(price) && !isNaN(qty)) {
        setTotal((price * qty).toFixed(2))
      } else {
        setTotal(0)
      }
    } else {
      setTotal(0)
    }
  }, [quantity, asset])

  const handleAdd = () => {
    const qty = parseFloat(quantity)
    if (!asset || isNaN(qty) || qty <= 0) {
      message.error('Количество должно быть положительным числом')
      return
    }

    dispatch(
      addCurrency({
        id: Date.now(),
        name: asset.name,
        price: parseFloat(asset.priceUsd).toFixed(2),
        quantity: quantity,
        total: parseFloat(total),
      })
    )
    setQuantity('')
    onComplete?.()
  }

  return (
    <div>
      <div style={{ marginBottom: '10px' }}>
        <p>Введите количество:</p>
        <Input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="0.00"
        />
      </div>

      <div style={{ marginBottom: '20px', fontWeight: 'bold' }}>
        Итого: {total} USD
      </div>

      <Button type="primary" onClick={handleAdd}>
        Купить
      </Button>
    </div>
  )
}

export default BuyForm
