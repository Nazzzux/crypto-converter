export interface IUserStore {
  userData: string | null;
  setUserData: (email: string) => void;
  resetUserData: () => void;
}
