import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>Restaurant Mane</h1>
      <p className={styles.tagline}>
        Sabores auténticos, experiencias inolvidables
      </p>
      <div className={styles.actions}>
        <Link to="/menu" className={`${styles.button} ${styles.primary}`}>
          Ver menú
        </Link>
        <Link to="/reservas" className={`${styles.button} ${styles.secondary}`}>
          Reservar mesa
        </Link>
      </div>
    </section>
  );
}

export default Hero;
