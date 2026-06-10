import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Restaurant Mane. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
