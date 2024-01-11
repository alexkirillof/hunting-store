import { Layout } from '../../components/Layout/Layout.tsx'
import { useSelector } from 'react-redux'
import styles from './cart.module.css'
import { IProduct } from 'src/store/slices/goodsSlice.ts'
import { GoodsList } from 'src/components/GoodsList/GoodsList.tsx'
import {RootState} from "src/store";

export const Cart = () => {
  const  cart  = useSelector<RootState,IProduct[]>((state) => state.goods.cart)
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
