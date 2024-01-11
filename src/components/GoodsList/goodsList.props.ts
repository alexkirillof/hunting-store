import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IProduct } from 'src/store/slices/goodsSlice.ts'

export interface GoodsListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  goods: IProduct[]
  appurtenance: string
}
