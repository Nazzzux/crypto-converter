import axios from 'axios';

const getErrorMessage = (error: any): string => {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data;

    if (typeof data === 'string') return data;
    if (typeof data?.message === 'string') return data.message;
    if (typeof data?.error === 'string') return data.error;
    if (typeof data?.detail === 'string') return data.detail;
  }

  return 'Unexpected error occurred';
};

export const axiosErrorInterceptor = (error: unknown) => {
  const message = getErrorMessage(error);

  console.error('[Axios Error]:', message);

  return Promise.reject(error);
};
