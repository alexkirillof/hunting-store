import { LayoutProps } from './layout.props'
import styles from './layout.module.css'
import Header from 'src/components/Header/Header.tsx'
import Footer from 'src/components/Footer/Footer.tsx'

export function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Header />
        <div className={styles.mainBlock}>{children}</div>
        <Footer />
      </div>
    </div>
  )
}
