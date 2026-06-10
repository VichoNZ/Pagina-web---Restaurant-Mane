import styles from './Contact.module.css';

function Contact() {
  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <p className={styles.eyebrow}>Estamos cerca</p>
        <h1>Contacto</h1>
        <p>
          Escríbenos o visítanos para coordinar tu próxima comida en Restaurant
          Mane.
        </p>
      </section>

      <section className={styles.grid}>
        <article className={styles.item}>
          <h2>Dirección</h2>
          <p>Av. Principal 123, Santiago</p>
        </article>
        <article className={styles.item}>
          <h2>Horario</h2>
          <p>Lunes a domingo, 12:00 a 23:00</p>
        </article>
        <article className={styles.item}>
          <h2>Teléfono</h2>
          <p>+56 9 1234 5678</p>
        </article>
        <article className={styles.item}>
          <h2>Correo</h2>
          <p>contacto@restaurantmane.cl</p>
        </article>
      </section>
    </main>
  );
}

export default Contact;
