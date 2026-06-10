import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        Restaurant Mane
      </Link>
      <ul className={styles.links}>
        <li>
          <Link to="/" className={styles.link}>
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/menu" className={styles.link}>
            Menú
          </Link>
        </li>
        <li>
          <Link to="/reservas" className={styles.link}>
            Reservas
          </Link>
        </li>
        <li>
          <Link to="/contacto" className={styles.link}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
