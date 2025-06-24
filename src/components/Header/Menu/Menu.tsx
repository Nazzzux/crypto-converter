import { MENU_PATHS } from 'constants/headerMenu';

import { Link } from 'components/ui/Link';

import styles from './Menu.module.scss';

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
