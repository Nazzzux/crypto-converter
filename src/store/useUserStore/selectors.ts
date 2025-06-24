import { IUserStore } from './types';

export const getUser = (state: IUserStore) => state.userData;
export const getSetUser = (state: IUserStore) => state.setUserData;
export const getResetUser = (state: IUserStore) => state.resetUserData;
