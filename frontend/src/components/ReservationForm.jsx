import styles from './ReservationForm.module.css';

function ReservationForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO Parte 3: enviar datos al backend
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="customer_name">
          Nombre
        </label>
        <input
          className={styles.input}
          type="text"
          id="customer_name"
          name="customer_name"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="phone">
          Teléfono
        </label>
        <input
          className={styles.input}
          type="tel"
          id="phone"
          name="phone"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Correo
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="reservation_date">
          Fecha
        </label>
        <input
          className={styles.input}
          type="date"
          id="reservation_date"
          name="reservation_date"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="reservation_time">
          Hora
        </label>
        <input
          className={styles.input}
          type="time"
          id="reservation_time"
          name="reservation_time"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="people_count">
          Cantidad de personas
        </label>
        <input
          className={styles.input}
          type="number"
          id="people_count"
          name="people_count"
          min="1"
          max="20"
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="comment">
          Comentario (opcional)
        </label>
        <textarea
          className={styles.textarea}
          id="comment"
          name="comment"
          rows="3"
        />
      </div>

      <button type="submit" className={styles.submit}>
        Enviar reserva
      </button>
    </form>
  );
}

export default ReservationForm;
