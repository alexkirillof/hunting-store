import styles from './goodsList.module.css'
import { GoodsListProps } from 'src/components/GoodsList/goodsList.props.ts'
import { GoodsItem } from 'src/components/GoodsItem/GoodsItem.tsx'

export const GoodsList = ({
  goods,
  appurtenance,
  ...props
}: GoodsListProps) => {
  return (
    <ul className={styles.listWrapper} {...props}>
      {goods.map((product) => (
        <li key={product.name} className={styles.card}>
          <GoodsItem appurtenance={appurtenance} product={product} />
        </li>
      ))}
    </ul>
  )
}
