import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

export const encryptString = (data: string) => AES.encrypt(data, import.meta.env.VITE_APP_CRYPTO_KEY).toString();

export const decryptString = (data: string) => AES.decrypt(data, import.meta.env.VITE_APP_CRYPTO_KEY).toString(Utf8);