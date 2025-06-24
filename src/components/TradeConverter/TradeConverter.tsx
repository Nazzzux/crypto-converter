import { ChangeEvent, useMemo } from 'react';

import { useGetAllAssets } from 'services/cryptoAssets/hooks/useGetAllAssets';
import { useAccessStore } from 'store/useAssetsStore';

import { ReactComponent as ArrowDownIcon } from 'assets/icons/ArrowDownIcon.svg';

import { Dropdown } from 'components/ui/Dropdown';
import { IconButton } from 'components/ui/IconButton';
import { Input } from 'components/ui/Input';
import { Loader } from 'components/ui/Loader';

import { getFieldName } from 'helpers/tradeConverterHelpers';

import { DropdownOption } from './components/DropdownOption';

import styles from './TradeConverter.module.scss';

export const TradeConverter = () => {
  const { coinId, fiat, amount, isFiatPrimary, setAmount, setCoinId, toggleDirection } =
    useAccessStore();

  const { data, isLoading } = useGetAllAssets();
  const rawAssets = data?.pages?.flat() || [];

  const options = rawAssets.map(({ id, name, image, current_price }) => ({
    value: id,
    label: name,
    image,
    price: current_price,
  }));

  const selected = options.find(o => o.value === coinId);
  const price = selected?.price;

  const changeHandler = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    const sanitized = value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');
    setAmount(sanitized);
  };

  const converted = useMemo(() => {
    const n = parseFloat(amount);
    if (!price || isNaN(n)) return '';
    return isFiatPrimary ? (n / price).toFixed(6) : (n * price).toFixed(2);
  }, [amount, price, isFiatPrimary]);

  const getLabel = (isFiatPrimary: boolean) =>
    isFiatPrimary ? fiat.toUpperCase() : selected?.label;

  const handleToggleDirection = () => {
    toggleDirection();
    setAmount('0');
  };

  if (isLoading) return <Loader />;

  return (
    <div className={styles.tradeConverter}>
      <div className={styles.assetsWrapper}>
        <Input
          classes={{ input: styles.input, label: styles.label }}
          className={styles.inputWrapper}
          label={getLabel(isFiatPrimary)}
          type="text"
          name={getFieldName(isFiatPrimary)}
          value={amount}
          onChange={changeHandler}
        />
        {!isFiatPrimary && (
          <Dropdown
            className={styles.dropdown}
            options={options}
            value={coinId}
            onChange={val => setCoinId(val)}
            renderOption={props => <DropdownOption {...props} />}
          />
        )}
      </div>

      <IconButton className={styles.swapButton} onClick={handleToggleDirection}>
        <ArrowDownIcon />
      </IconButton>

      <div>
        <Input
          classes={{ input: styles.input, label: styles.label }}
          className={styles.inputWrapper}
          label={getLabel(!isFiatPrimary)}
          name={getFieldName(!isFiatPrimary)}
          value={converted}
          readOnly
        />
      </div>
    </div>
  );
};
