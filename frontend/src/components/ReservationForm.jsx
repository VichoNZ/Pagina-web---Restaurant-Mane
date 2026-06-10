import { useState } from 'react';
import { createReservation } from '../services/api';
import styles from './ReservationForm.module.css';

function ReservationForm() {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage({ type: '', text: '' });

    const form = event.currentTarget;
    const formData = new FormData(form);
    const reservationTime = formData.get('reservation_time');
    const comment = formData.get('comment')?.trim();

    const reservation = {
      customer_name: formData.get('customer_name')?.trim(),
      phone: formData.get('phone')?.trim(),
      email: formData.get('email')?.trim(),
      reservation_date: formData.get('reservation_date'),
      reservation_time:
        reservationTime?.length === 5 ? `${reservationTime}:00` : reservationTime,
      people_count: Number(formData.get('people_count')),
      comment: comment || null,
    };

    try {
      await createReservation(reservation);
      form.reset();
      setMessage({
        type: 'success',
        text: 'Reserva enviada correctamente. Te contactaremos para confirmar.',
      });
    } catch (error) {
      setMessage({
        type: 'error',
        text: error.message || 'No se pudo enviar la reserva.',
      });
    } finally {
      setSubmitting(false);
    }
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
          minLength="2"
          autoComplete="name"
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
          minLength="6"
          autoComplete="tel"
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
          autoComplete="email"
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
          defaultValue="2"
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

      {message.text && (
        <p
          className={`${styles.message} ${styles[message.type]}`}
          role={message.type === 'error' ? 'alert' : 'status'}
        >
          {message.text}
        </p>
      )}

      <button type="submit" className={styles.submit} disabled={submitting}>
        {submitting ? 'Enviando...' : 'Enviar reserva'}
      </button>
    </form>
  );
}

export default ReservationForm;
