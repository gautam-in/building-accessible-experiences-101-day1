import styles from './logo.module.css';

export const Logo = () => (
  <div className={styles.logo}>
        <a href="/"><img src={`/static/images/logo.png`} srcSet="/images/logo.png, /images/logo_2x.png 2x" /></a>
    </div>
)