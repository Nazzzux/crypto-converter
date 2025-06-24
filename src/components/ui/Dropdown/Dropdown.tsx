import { useEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import { IOptionBase } from 'interfaces/options';

import { IDropdownProps } from './types';

import styles from './Dropdown.module.scss';

export const Dropdown = <T extends IOptionBase>({
  options,
  value,
  defaultValue,
  onChange,
  placeholder = 'Select...',
  renderOption,
  className = '',
}: IDropdownProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? '');

  const ref = useRef<HTMLDivElement>(null);

  const actualValue = value !== undefined ? value : internalValue;
  const selectedOption = options.find(opt => opt.value === actualValue);

  const handleSelect = (val: string) => () => {
    if (value === undefined) {
      setInternalValue(val);
    }
    onChange?.(val);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={clsx(styles.selectWrapper, className)} ref={ref}>
      <div className={styles.selected} onClick={() => setIsOpen(prev => !prev)}>
        {selectedOption ? (renderOption?.(selectedOption) ?? selectedOption.label) : placeholder}
        <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <ul className={styles.optionsList}>
          {options.map(opt => (
            <li key={opt.value} className={styles.option} onClick={handleSelect(opt.value)}>
              {renderOption ? renderOption(opt) : opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
