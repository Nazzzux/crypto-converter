import { useState } from 'react';

import { LoginForm } from 'components/Forms/Login/Login';
import { Button } from 'components/ui/Button';

export const LoginButton = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const clickHandler = () => setIsModalOpened(true);
  const closeModalHandler = () => setIsModalOpened(false);

  return (
    <>
      <Button onClick={clickHandler}>Log in</Button>
      <LoginForm isOpen={isModalOpened} onClose={closeModalHandler} children={undefined} />
    </>
  );
};
