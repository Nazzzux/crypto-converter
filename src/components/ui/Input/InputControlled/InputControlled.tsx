import { FieldValues, useController, UseControllerProps } from 'react-hook-form';

import { IInputProps, Input } from '../Input';

export const InputControlled = <T extends FieldValues>(
  props: UseControllerProps<T> & IInputProps,
) => {
  const { name, control, rules, defaultValue, maxLength, ...restProps } = props;

  const {
    field: { value, onChange, ...restField },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  return (
    <Input
      value={value ?? ''}
      onChange={onChange}
      maxLength={maxLength}
      fieldError={error?.message}
      {...restField}
      {...restProps}
    />
  );
};
