import { ProductList } from '../productList/productList';
import styles from './main.module.css';
export const Main = () => (
  <div className={styles.container}>
    <ProductList />
  </div>
);
