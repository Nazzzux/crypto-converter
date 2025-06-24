import { useAccessStore } from 'store/useAssetsStore';
import { getResetUser, useUserStore } from 'store/useUserStore';

import { usePromiseStatus } from 'hooks/usePromiseStatus';

import { Button } from 'components/ui/Button';

export const LogoutButton = () => {
  const resetUser = useUserStore(getResetUser);
  const resetAssets = useAccessStore(state => state.resetStore);
  const { track, isPending } = usePromiseStatus();

  const logOutHandler = async () => {
    await track(new Promise(res => setTimeout(res, 3000)));
    resetUser();
    resetAssets();
  };

  return (
    <Button isLoading={isPending} variant="text" onClick={logOutHandler}>
      Log out
    </Button>
  );
};
