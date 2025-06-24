import { useCallback, useState } from 'react';

export enum Status {
  IDLE = 'idle',
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
}

export interface IState {
  status: Status;
  error?: string | null;
}

export interface IHookReturn extends IState {
  track: TrackFn;
  isPending: boolean;
  isLoading: boolean;
  reset: VoidFunction;
}

export const processError = (error: Error | string): string => {
  return error instanceof Error ? error.message : error;
};

export type TrackFn = <T = unknown>(promise: Promise<T>) => Promise<T>;

export const usePromiseStatus = (): IHookReturn => {
  const [state, setState] = useState<IState>({ status: Status.IDLE });

  const { status, error } = state;

  const track = useCallback<IHookReturn['track']>(async promise => {
    setState({ status: Status.PENDING, error: null });

    try {
      const response = await promise;
      setState({ status: Status.SUCCESS });

      return response;
    } catch (error) {
      setState({
        status: Status.FAILED,
        error: processError(error as Error | string),
      });

      throw error;
    }
  }, []);

  const reset = (): void => {
    setState({ status: Status.IDLE, error: null });
  };

  return {
    track,
    error,
    status,
    isPending: status === Status.PENDING,
    isLoading: status === Status.IDLE || status === Status.PENDING,
    reset,
  };
};
