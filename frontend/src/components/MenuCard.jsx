import styles from './MenuCard.module.css';

function MenuCard({ name, description, price, imageUrl, available = true }) {
  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={imageUrl || 'https://via.placeholder.com/300x160?text=Plato'}
        alt={name}
      />
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${price?.toLocaleString('es-CL')}</span>
          {!available && (
            <span className={styles.unavailable}>No disponible</span>
          )}
        </div>
      </div>
    </article>
  );
}

export default MenuCard;
