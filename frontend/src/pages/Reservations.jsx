import ReservationForm from '../components/ReservationForm';

function Reservations() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Reservas</h1>
      <p style={{ marginBottom: '1.5rem' }}>
        Completa el formulario para reservar tu mesa.
      </p>
      <ReservationForm />
    </main>
  );
}

export default Reservations;
