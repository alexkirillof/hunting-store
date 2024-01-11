import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IProduct } from 'src/store/slices/goodsSlice.ts'

export interface GoodsItemProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  product: IProduct
  appurtenance: string
}
