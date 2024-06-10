import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { AuthProvider } from './contexts/AuthContext.jsx';
import './index.css';
import { router } from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </RecoilRoot>,
);
