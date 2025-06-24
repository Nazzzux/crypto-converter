import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { IUserStore } from './types';

export const useUserStore = create<IUserStore>()(
  persist(
    set => ({
      userData: null,
      setUserData: (userData: string) => set({ userData }),
      resetUserData: () => set({ userData: null }),
    }),
    {
      name: 'user-storage',
    },
  ),
);
