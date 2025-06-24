import { create } from 'zustand';
import { ITradeState } from './types';

const getDefaultState = () => ({
  coinId: 'bitcoin',
  fiat: 'usd',
  amount: '0',
  isFiatPrimary: false,
});

export const useAccessStore = create<ITradeState>(set => ({
  ...getDefaultState(),
  setCoinId: id => set({ coinId: id }),
  setAmount: val => set({ amount: val }),
  toggleDirection: () => set(s => ({ isFiatPrimary: !s.isFiatPrimary })),
  resetStore: () => set({ ...getDefaultState() }),
}));
