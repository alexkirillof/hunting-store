import styles from './footer.module.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={'/'}>
          <h2>LOGO</h2>
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by{' '}
        <a
          href='https://github.com/alexkirillof'
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          Alex
        </a>
      </div>
    </section>
  )
}

export default Footer
