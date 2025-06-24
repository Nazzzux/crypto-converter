import { decryptString } from "./crypto";

export const getAvatarInitial = (name: string) => decryptString(name).charAt(0).toUpperCase();