import { FC, useState } from 'react';
import { IInputProps } from '../Input';
import { IconButton } from 'components/ui/IconButton';
import { ReactComponent as VisibilityIcon } from 'assets/icons/VisibilityIcon.svg';
import { ReactComponent as VisibilityHiddenIcon } from 'assets/icons/VisibilityHiddenIcon.svg';
import { InputControlled } from '../InputControlled';

export const PasswordInput: FC<IInputProps> = props => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <InputControlled
      type={isVisible ? 'text' : 'password'}
      adornment={
        <IconButton onClick={toggleVisibility}>
          {isVisible ? <VisibilityIcon /> : <VisibilityHiddenIcon />}
        </IconButton>
      }
      {...props}
    />
  );
};
