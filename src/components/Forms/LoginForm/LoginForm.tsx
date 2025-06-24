import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { zodResolver } from '@hookform/resolvers/zod';
import { TRADE_PATH } from 'constants/paths';
import { getSetUser } from 'store/useUserStore/selectors';
import { useUserStore } from 'store/useUserStore/store';

import { usePromiseStatus } from 'hooks/usePromiseStatus';

import { Button } from 'components/ui/Button';
import { InputControlled } from 'components/ui/Input';
import { PasswordInput } from 'components/ui/Input/PasswordInput';
import { Modal } from 'components/ui/Modal';

import { encryptString } from 'helpers/crypto';
import ToastService from 'helpers/ToastService';

import {
  ILoginForm,
  LOGIN_FORM_FIELDS,
  loginFormDefaultValues,
  loginFormValidationSchema,
} from './form';
import { ILoginProps } from './types';

import styles from './LoginForm.module.scss';

export const LoginForm: FC<ILoginProps> = ({ isOpen, onClose }) => {
  const setUser = useUserStore(getSetUser);
  const { track, isPending } = usePromiseStatus();
  const navigate = useNavigate();

  const methods = useForm<ILoginForm>({
    defaultValues: loginFormDefaultValues,
    resolver: zodResolver(loginFormValidationSchema),
    mode: 'onTouched',
  });

  const onSubmit = async ({ email }: ILoginForm) => {
    try {
      // Simulate login
      await track(new Promise(res => setTimeout(res, 3000)));
      const encryptedEmail = encryptString(email);

      setUser(encryptedEmail);
      onClose();

      navigate(TRADE_PATH);
    } catch (error) {
      error instanceof Error && ToastService.showError(`Login failed ${error.message}`);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <FormProvider {...methods}>
        <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
          <h2>Log in</h2>
          <InputControlled
            name={LOGIN_FORM_FIELDS.email}
            label="Email"
            placeholder="Enter your email"
          />
          <PasswordInput
            name={LOGIN_FORM_FIELDS.password}
            label="Password"
            placeholder="Enter your password"
          />
          <Button
            className={styles.submitButton}
            isDisabled={!methods.formState.isValid}
            type="submit"
            isLoading={isPending}
          >
            Log in
          </Button>
        </form>
      </FormProvider>
    </Modal>
  );
};
