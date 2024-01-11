import { Layout } from '../../components/Layout/Layout.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getGoods } from '../../store/actions/getGoods.ts'
import styles from './main.module.css'
import {IProduct} from 'src/store/slices/goodsSlice.ts'
import { GoodsList } from 'src/components/GoodsList/GoodsList.tsx'
import {RootState} from "src/store";


export const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGoods())
  }, [dispatch])
  const goods  = useSelector<RootState,IProduct[]>((state) => state.goods.goods)
  return (
    <Layout>
      <h2 className={styles.title}>Товары</h2>
      <GoodsList goods={goods} appurtenance='Products' />
    </Layout>
  )
}
