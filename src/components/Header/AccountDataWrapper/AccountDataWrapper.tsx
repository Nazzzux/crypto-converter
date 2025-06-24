import { getUser, useUserStore } from 'store/useUserStore';
import { LoginButton } from './LoginButton/LoginButton';
import { LogoutButton } from './LogoutButton/LogoutButton';
import styles from './AccountDataWrapper.module.scss';
import { Avatar } from 'components/ui/Avatar';
import { getAvatarInitial } from 'helpers/getAvatarInitial';

export const AccountDataWrapper = () => {
  const email = useUserStore(getUser);

  return (
    <>
      {email ? (
        <div className={styles.wrapper}>
          <Avatar initials={getAvatarInitial(email)} />
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </>
  );
};
