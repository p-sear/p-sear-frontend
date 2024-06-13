import { FcGoogle } from 'react-icons/fc';

import './SocialLogin.css';

const SocialLogin = () => {
  const handleGoogleLogin = () => {
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_PROD_REDIRECT_URI}&response_type=code&scope=email`;
  };

  return (
    <div className='socialLogin-container'>
      <div className='flex items-center justify-center gap-3'>
        <hr />
        <p style={{ color: 'lightgray' }}>OR</p>
        <hr />
      </div>

      <div className='btn-box flex flex-col'>
        <button className='google-login relative' onClick={handleGoogleLogin}>
          <span className='google-icon absolute'>
            <FcGoogle size={20} />
          </span>
          <p>구글 로그인</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
