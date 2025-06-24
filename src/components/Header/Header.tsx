import { Link } from 'react-router-dom';

import { HOME_PATH } from 'constants/paths';

import { Container } from 'components/ui/Container';

import { AccountDataWrapper } from './AccountDataWrapper';
import { Menu } from './Menu';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <Container>
        <div className={styles.headerContent}>
          <Link to={HOME_PATH} className={styles.logo}>
            CRYPTO
          </Link>
          <Menu />
          <AccountDataWrapper />
        </div>
      </Container>
    </header>
  );
};
