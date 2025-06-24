import { ToastComponent } from 'components/ToastComponent';
import { toast, ToastOptions } from 'react-toastify';

type ToastType = 'success' | 'error' | 'info' | 'warning';
type ToastFnType = 'showSuccess' | 'showError' | 'showInfo' | 'showWarning';

type IToastFn = (text: string, options?: ToastOptions) => void;
type IToastService = Record<ToastFnType, IToastFn>;

const showToast = (type: ToastType, text: string, options?: ToastOptions) => {
  const content = <ToastComponent text={text} />;
  toast[type](content, options);
};

const ToastService: IToastService = {
  showSuccess(text, options) {
    showToast('success', text, options);
  },
  showError(text, options) {
    showToast('error', text || 'Unknown error', options);
  },
  showInfo(text, options) {
    showToast('info', text, options);
  },
  showWarning(text, options) {
    showToast('warning', text, options);
  },
};

export default ToastService;
