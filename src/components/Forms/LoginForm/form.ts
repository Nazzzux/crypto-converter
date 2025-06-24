import { ERROR_MESSAGES } from 'constants/errorMessages';
import z from 'zod';

export const LOGIN_FORM_FIELDS = {
  email: 'email',
  password: 'password',
} as const;

export interface ILoginForm {
  email: string;
  password: string;
}

export const loginFormDefaultValues = {
  email: '',
  password: '',
};

export const loginFormValidationSchema = z.object({
  email: z.string().email(ERROR_MESSAGES.invalidEmail).nonempty(ERROR_MESSAGES.required),
  password: z.string().nonempty(ERROR_MESSAGES.required).min(8, ERROR_MESSAGES.minEightCharacters),
});
