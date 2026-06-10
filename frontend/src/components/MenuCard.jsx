import styles from './MenuCard.module.css';

function MenuCard({ name, description, price, category, imageUrl, available = true }) {
  return (
    <article className={styles.card}>
      {imageUrl ? (
        <img className={styles.image} src={imageUrl} alt={name} />
      ) : (
        <div className={styles.placeholder}>
          <span>{category || 'Plato'}</span>
        </div>
      )}
      <div className={styles.content}>
        {category && <span className={styles.category}>{category}</span>}
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
