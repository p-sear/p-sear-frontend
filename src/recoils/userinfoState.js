import { atom } from 'recoil';

const userinfoState = atom({
  key: 'userinfoState',
  default: {
    email: undefined,
    password: undefined,
  },
});

export default userinfoState;
