import React, { useState, useEffect } from 'react'
import { Modal, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { addCurrency } from '../../RTK/slices/portfolioSlice'

function ModalBuy({ open, asset, onOk, onCancel }) {
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
    if (quantity && asset) {
      onOk({ asset, quantity: parseFloat(quantity), total: parseFloat(total) })
      dispatch(
        addCurrency({
          id: Date.now(),
          name: asset.name,
          price: asset.priceUsd,
          quantity: quantity,
          total: total,
        })
      )
      setQuantity('')
    }
  }

  return (
    <Modal
      title={`Купить ${asset?.name || ''}`}
      open={open}
      onCancel={onCancel}
      footer={null}
    >
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
    </Modal>
  )
}

export default ModalBuy
