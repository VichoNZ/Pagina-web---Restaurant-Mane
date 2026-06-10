import Hero from '../components/Hero';
import styles from './Home.module.css';

function Home() {
  return (
    <main>
      <Hero />
      <section className={styles.section}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Cocina de temporada</p>
          <h2 className={styles.title}>Una mesa simple, cálida y bien servida</h2>
          <p className={styles.text}>
            Restaurant Mane reúne platos preparados al momento, atención cercana
            y un ambiente pensado para almorzar tranquilo o compartir una cena.
          </p>

          <div className={styles.highlights}>
            <article className={styles.highlight}>
              <span className={styles.number}>01</span>
              <h3>Menú fresco</h3>
              <p>Opciones de entrada, fondo y postre con sabores de la casa.</p>
            </article>
            <article className={styles.highlight}>
              <span className={styles.number}>02</span>
              <h3>Reservas simples</h3>
              <p>Elige fecha, hora y cantidad de personas desde el formulario.</p>
            </article>
            <article className={styles.highlight}>
              <span className={styles.number}>03</span>
              <h3>Ambiente familiar</h3>
              <p>Un espacio cómodo para encuentros pequeños y celebraciones.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
