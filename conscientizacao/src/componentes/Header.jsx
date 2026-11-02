import { Link, NavLink } from 'react-router-dom'
import styles from './css/Header.module.css'

export default function Header() {
  return (
    <header className={`${styles.header} site-header`}>
      <Link to="/" className="brand" aria-label="Conscientiza, início">
        Conscientiza
      </Link>
      <nav aria-label="Navegação principal">
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/apoio">Denúncia e apoio</NavLink>
      </nav>
    </header>
  )
}
