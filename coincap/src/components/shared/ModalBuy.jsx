import React from 'react'
import { Modal } from 'antd'
import BuyForm from './BuyForm'

function ModalBuy({ open, asset, onOk, onCancel }) {
  return (
    <Modal
      title={`Купить ${asset?.name || ''}`}
      open={open}
      onCancel={onCancel}
      footer={null}
      width="50%"
    >
      <BuyForm asset={asset} onComplete={onOk} />
    </Modal>
  )
}

export default ModalBuy
