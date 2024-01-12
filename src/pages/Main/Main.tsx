import { Layout } from '../../components/Layout/Layout.tsx'
import { useEffect } from 'react'
import { getGoods } from '../../store/actions/getGoods.ts'
import styles from './main.module.css'
import { GoodsList } from 'src/components/GoodsList/GoodsList.tsx'
import { useAppDispatch, useAppSelector } from 'src/hooks'

export const Main = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getGoods())
  }, [dispatch])
  const goods = useAppSelector((state) => state.goods.goods)
  return (
    <Layout>
      <h2 className={styles.title}>Товары</h2>
      <GoodsList goods={goods} appurtenance='Products' />
    </Layout>
  )
}
