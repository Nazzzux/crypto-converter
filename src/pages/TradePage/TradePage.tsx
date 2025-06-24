import { TradeConverter } from 'components/TradeConverter';

import styles from './TradePage.module.scss';

export const TradePage = () => {
  return (
    <div className={styles.tradePage}>
      <TradeConverter />
    </div>
  );
};
