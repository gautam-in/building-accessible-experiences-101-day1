import { Logo } from '../logo';
import styles from './header.module.css';

export const Header = () => (
  <div className={styles.container}>
    <Logo />
  </div>
)