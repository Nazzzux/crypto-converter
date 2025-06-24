import { FC } from 'react';

import { ITradeDropdownOption } from './types';
import styles from '../../TradeConverter.module.scss';

export const DropdownOption: FC<ITradeDropdownOption> = ({ image, label }) => (
  <div className={styles.optionWrapper}>
    <img className={styles.icon} src={image} alt={label} />
    <span>{label}</span>
  </div>
);
