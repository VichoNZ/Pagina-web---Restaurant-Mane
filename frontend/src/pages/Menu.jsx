import { useEffect, useMemo, useState } from 'react';
import MenuCard from '../components/MenuCard';
import { getMenu } from '../services/api';
import styles from './Menu.module.css';

function Menu() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    async function loadMenu() {
      try {
        setLoading(true);
        setError('');
        const data = await getMenu();

        if (isMounted) {
          setItems(data);
        }
      } catch {
        if (isMounted) {
          setError('No se pudo cargar el menú. Revisa que el backend esté encendido.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadMenu();

    return () => {
      isMounted = false;
    };
  }, []);

  const groupedItems = useMemo(() => {
    return items.reduce((groups, item) => {
      const category = item.category || 'Otros';
      return {
        ...groups,
        [category]: [...(groups[category] || []), item],
      };
    }, {});
  }, [items]);

  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <p className={styles.eyebrow}>Nuestra carta</p>
        <h1>Menú</h1>
        <p>
          Platos preparados para disfrutar en mesa, con opciones simples y
          sabores de la casa.
        </p>
      </section>

      {loading && <p className={styles.status}>Cargando menú...</p>}

      {error && (
        <p className={`${styles.status} ${styles.error}`} role="alert">
          {error}
        </p>
      )}

      {!loading && !error && items.length === 0 && (
        <p className={styles.status}>No hay platos disponibles por ahora.</p>
      )}

      {!loading && !error && items.length > 0 && (
        <div className={styles.sections}>
          {Object.entries(groupedItems).map(([category, categoryItems]) => (
            <section className={styles.category} key={category}>
              <h2>{category}</h2>
              <div className={styles.grid}>
                {categoryItems.map((item) => (
                  <MenuCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    category={item.category}
                    imageUrl={item.image_url}
                    available={item.available}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </main>
  );
}

export default Menu;
