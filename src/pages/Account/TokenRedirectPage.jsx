import { useEffect } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import authInstance from '../../axios/utils/authInstance';
import userinfoState from '../../recoils/userinfoState.js';

const TokenRedirectPage = () => {
  const searchParams = useSearchParams()[0];
  const token = searchParams.get('token');
  const navigate = useNavigate();
  const [userinfo, setUserinfo] = useRecoilState(userinfoState);

  useEffect(() => {
    authInstance.registerToken(setUserinfo, token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (userinfo && userinfo.id) {
    navigate('/');
  }

  return <div />;
};

export default TokenRedirectPage;
