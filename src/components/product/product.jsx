import { useState } from 'react';
import styles from './product.module.css';

export const Product = ({ product }) => {
  const [isPressed, setPressed] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>{product.name}</div>
      <img alt="" className={styles.image} src={product.imageURL} />
      <p className={styles.description}>{product.description}</p>
      <div className={styles.moreinfo}>
        <p className={styles.price}>MRP Rs.{product.price}</p>
        <div
          tabindex="0"
          role="button"
          aria-pressed={isPressed}
          onKeyDown={(e) => {
            if (e.key !== 'Enter' && e.key !== ' ') {
              return;
            }
            setPressed(true);
          }}
          onKeyUp={(e) => {
            if (e.key !== 'Enter' && e.key !== ' ') {
              return;
            }
            setPressed(false);
          }}
          onMouseDown={() => {
            setPressed(true);
          }}
          onMouseUp={() => {
            setPressed(false);
          }}
          className={styles.buynow}
        >
          Buy Now
        </div>
      </div>
    </div>
  );
};
