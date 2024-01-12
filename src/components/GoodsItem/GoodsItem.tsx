import styles from './goodsItem.module.css'
import { GoodsItemProps } from 'src/components/GoodsItem/goodsItem.props.ts'
import {
  addItemToCart,
  addItemToFav,
  removeItemFromCart,
  removeItemFromFav
} from 'src/store/slices/goodsSlice.ts'
import { useDispatch } from 'react-redux'
import Button from 'src/components/UI/Button/Button.tsx'
import { useAppSelector } from 'src/hooks'

export const GoodsItem = ({ product, appurtenance }: GoodsItemProps) => {
  const dispatch = useDispatch()
  const inCart = useAppSelector(
    (state) => !!state.goods.cart.find((x) => x.name === product.name)
  )
  const inFav = useAppSelector(
    (state) => !!state.goods.favorites.find((x) => x.name === product.name)
  )
  return (
    <>
      <div className={styles.imgWrap}>
        <img
          src={`${product?.picture}`}
          alt='Изображение товара'
          className={styles.image}
        />
      </div>

      <div className={styles.info}>
        <h3 className={styles.name}>{product?.name}</h3>
        <div className={styles.price}>
          Цена: {product?.price.toLocaleString('en')} &#8381;
        </div>
        <div className={styles.quantity}>
          В наличии:
          {product?.quantity > 0 ? ` ${product?.quantity}` : ` нет`}
        </div>
        {appurtenance === 'Products' && (
          <div className={styles.btnWrap}>
            {product?.quantity > 0 && (
              <Button
                title={inCart ? 'В корзине' : 'В корзину'}
                handler={() => {
                  dispatch(addItemToCart(product))
                }}
                disabled={inCart}
              />
            )}
            <Button
              title={inFav ? 'В избранном' : 'В избранное'}
              handler={() => {
                dispatch(addItemToFav(product))
              }}
              disabled={inFav}
            />
          </div>
        )}
        {appurtenance === 'Cart' && (
          <div className={styles.btnWrap}>
            <Button
              title='Удалить из корзины'
              handler={() => {
                dispatch(removeItemFromCart(product))
              }}
            />
          </div>
        )}
        {appurtenance === 'Fav' && (
          <div className={styles.btnWrap}>
            <Button
              title='Удалить из избранного'
              handler={() => {
                dispatch(removeItemFromFav(product))
              }}
            />
          </div>
        )}
      </div>
    </>
  )
}
