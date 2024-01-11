import { Layout } from '../../components/Layout/Layout.tsx'
import { useSelector } from 'react-redux'
import styles from './favorites.module.css'
import { IProduct } from 'src/store/slices/goodsSlice.ts'
import { GoodsList } from 'src/components/GoodsList/GoodsList.tsx'
import {RootState} from "src/store";

export const Favorites = () => {
  const  favorites  =  useSelector<RootState,IProduct[]>((state) => state.goods.favorites)
  return (
    <Layout>
      <h2 className={styles.title}>Избранное</h2>
      {favorites.length > 0 ? (
        <GoodsList goods={favorites} appurtenance='Fav' />
      ) : (
        <div className={styles.emptyImg}>
          <img src='/no favorites.jpg' alt='В избранном пока пусто' />
          <h2>Нет товаров в избранном</h2>
        </div>
      )}
    </Layout>
  )
}
