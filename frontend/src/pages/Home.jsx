import Hero from '../components/Hero';

function Home() {
  return (
    <main>
      <Hero />
      <section style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Platos destacados</h2>
        <p>Próximamente: selección de nuestros mejores platos.</p>
      </section>
    </main>
  );
}

export default Home;
