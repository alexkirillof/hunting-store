import { Layout } from '../../components/Layout/Layout.tsx'
import styles from './cart.module.css'
import { GoodsList } from 'src/components/GoodsList/GoodsList.tsx'
import { useAppSelector } from 'src/hooks'

export const Cart = () => {
  const cart = useAppSelector((state) => state.goods.cart)
  return (
    <Layout>
      <h2 className={styles.title}>Корзина</h2>
      {cart.length > 0 ? (
        <GoodsList goods={cart} appurtenance='Cart' />
      ) : (
        <div className={styles.emptyImg}>
          <img src='/empty cart.jpg' alt='Корзина пуста' />
          <h2>нет товаров в корзине</h2>
        </div>
      )}
    </Layout>
  )
}
