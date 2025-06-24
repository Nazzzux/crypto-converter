import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { HOME_PATH } from 'constants/paths';
import { Container } from 'components/ui/Container';
import { Menu } from './Menu';
import { AccountDataWrapper } from './AccountDataWrapper';
import { useUserStore, getUser } from 'store/useUserStore';

export const Header = () => {
  const userData = useUserStore(getUser);

  return (
    <header className={styles.headerWrapper}>
      <Container>
        <div className={styles.headerContent}>
          <Link to={HOME_PATH} className={styles.logo}>
            CRYPTO
          </Link>
          {userData && <Menu />}
          <AccountDataWrapper />
        </div>
      </Container>
    </header>
  );
};
