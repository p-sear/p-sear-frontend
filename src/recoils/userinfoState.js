import { atom } from 'recoil';

const userinfoState = atom({
  key: 'userinfoState',
  default: {
    id: undefined,
    email: undefined,
    username: undefined,
    tel: undefined,
    description: undefined,
  },
});

export default userinfoState;
