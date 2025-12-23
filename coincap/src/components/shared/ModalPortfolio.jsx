import { Modal, Table } from 'antd'
import { useState } from 'react'

const columnsBase = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Price', dataIndex: 'price', key: 'price' },
  { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
  { title: 'Total', dataIndex: 'total', key: 'total' },
]

function ModalPortfolio({ open, asset, onOk, onCancel }) {
  const data = []
  const columns = [
    ...columnsBase,
    {
      title: '',
      key: 'action',
      render: (_, record) => (
        <button
          style={{
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            fontSize: '18px',
            color: 'blue',
          }}
          //   onClick={() => handleRemove(record)}
        >
          Х
        </button>
      ),
    },
  ]
  return (
    <Modal
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
    >
      <p>Портфель</p>
      <Table columns={columns} dataSource={data} />
      <p>Итого: {}$ </p>
    </Modal>
  )
}

export default ModalPortfolio
