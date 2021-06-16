import * as S from './Logo.css';

export const Logo = () => (
  <div className={S.logo}>
        <a href="/"><img src={`/static/images/logo.png`} srcSet="/images/logo.png, /images/logo_2x.png 2x" /></a>
    </div>
)