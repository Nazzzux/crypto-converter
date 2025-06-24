export interface ITradeState {
  coinId: string;
  fiat: string;
  amount: string;
  isFiatPrimary: boolean;
  setCoinId: (id: string) => void;
  setAmount: (value: string) => void;
  toggleDirection: VoidFunction;
  resetStore: VoidFunction;
}