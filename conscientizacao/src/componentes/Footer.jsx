import { Link } from 'react-router-dom'
import styles from './css/Footer.module.css'

export default function Footer() {
  return (
    <footer className={`${styles.footer} site-footer`}>
      <div className="footer-message">
        <Link to="/" className="footer-brand">Conscientiza</Link>
        <p>Um cantinho para aprender, conversar e tratar todo mundo com respeito.</p>
      </div>
      <div className="footer-links">
        <Link to="/#temas">Conheça os temas</Link>
        <Link to="/apoio">Canais de apoio</Link>
        <span>Em emergência, ligue 190.</span>
      </div>
      <small>© 2026 Conscientiza · Informação e respeito para todas as pessoas.</small>
    </footer>
  )
}
