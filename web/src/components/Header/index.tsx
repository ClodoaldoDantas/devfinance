import { ActiveLink } from '../ActiveLink';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <img src="/logo.svg" alt="dev.finance" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Listagem</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/register">
            <a>Cadastro</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/import">
            <a>Importar</a>
          </ActiveLink>
        </nav>
      </div>
    </header>
  );
}
