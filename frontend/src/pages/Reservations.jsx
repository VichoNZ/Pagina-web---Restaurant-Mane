import ReservationForm from '../components/ReservationForm';
import styles from './Reservations.module.css';

function Reservations() {
  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <p className={styles.eyebrow}>Reserva tu mesa</p>
        <h1>Reservas</h1>
        <p>
          Completa tus datos y guardaremos la solicitud en nuestro sistema.
        </p>
      </section>

      <section className={styles.content}>
        <div className={styles.formPanel}>
          <ReservationForm />
        </div>
        <aside className={styles.aside}>
          <h2>Detalles</h2>
          <p>Recibimos reservas para almuerzo y cena todos los días.</p>
          <p>Para grupos grandes, deja una nota en el comentario.</p>
        </aside>
      </section>
    </main>
  );
}

export default Reservations;
