import { Route, Routes } from 'react-router-dom'

import { Main } from '../pages/Main/Main.tsx'
import { Favorites } from 'src/pages/Favorites/Favorites.tsx'
import { Cart } from 'src/pages/Cart/Cart.tsx'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/favorites' element={<Favorites />} />
    </Routes>
  )
}
