import styles from './header.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IProduct } from 'src/store/slices/goodsSlice.ts'
import {RootState} from "src/store";

const Header = () => {
  const  cart  = useSelector<RootState,IProduct[]>((state) => state.goods.cart)
  const  favorites  =  useSelector<RootState,IProduct[]>((state) => state.goods.favorites)
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={'/'}>
          <h2>LOGO</h2>
        </Link>
      </div>
      <div className={styles.account}>
        <Link to={'/cart'} className={styles.cart}>
          <svg className={styles['icon-cart']}>
            <use xlinkHref='/sprite.svg#bag' />
          </svg>
          {cart.length > 0 && (
            <span className={styles.count}>{cart.length}</span>
          )}
        </Link>
        <Link to={'/favorites'} className={styles.favourites}>
          <svg className={styles['icon-fav']}>
            <use xlinkHref='/sprite.svg#heart' />
          </svg>
          {favorites.length > 0 && (
            <span className={styles.count}>{favorites.length}</span>
          )}
        </Link>
      </div>
    </div>
  )
}

export default Header
