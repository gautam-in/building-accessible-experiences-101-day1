import { Logo } from '../logo';
import { MiniCart } from '../miniCart/miniCart';
import { Navigation } from '../navigation/navigation';
import styles from './header.module.css';

export const Header = () => (
  <div className={styles.container}>
    <Logo />
    <Navigation
      links={[
        { id: 1, text: 'Home', url: '/' },
        { id: 2, text: 'About', url: '/about' },
      ]}
    />
    <MiniCart />
  </div>
);
