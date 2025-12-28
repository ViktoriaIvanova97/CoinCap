import { Modal, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { selectorCurrency, selectorTotal } from '../../RTK/selectors/selectors'
import { handleRemove } from '../../RTK/slices/portfolioSlice'

const columnsBase = [
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Price', dataIndex: 'price', key: 'price' },
  { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
  { title: 'Total', dataIndex: 'total', key: 'total' },
]

function ModalPortfolio({ open, onOk, onCancel }) {
  const dispatch = useDispatch()

  const currency = useSelector(selectorCurrency)
  const totalSum = useSelector(selectorTotal)

  const data = currency.map((item) => ({
    key: item.id,
    id: item.id,
    name: item.name,
    price: item.price,
    quantity: item.quantity,
    total: item.total,
  }))

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
            color: 'red',
          }}
          onClick={() => dispatch(handleRemove(record.id))}
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
      width="50%"
    >
      <p>Портфель</p>
      <Table columns={columns} dataSource={data} />
      <p>Итого: {totalSum}$ </p>
    </Modal>
  )
}

export default ModalPortfolio
