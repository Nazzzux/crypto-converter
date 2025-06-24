import { HOME_PATH, TRADE_PATH } from 'constants/paths';

import { Link } from 'components/ui/Link';

import styles from './Menu.module.scss';

const MENU_PATHS = [
  { to: HOME_PATH, title: 'Home' },
  { to: TRADE_PATH, title: 'Trade' },
];

export const Menu = () => {
  return (
    <nav>
      <ul className={styles.menuList}>
        {MENU_PATHS.map(({ to, title }) => (
          <li key={to} className={styles.menuItem}>
            <Link to={to}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
