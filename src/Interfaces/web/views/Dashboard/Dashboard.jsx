import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardUser from '../../components/Template/DashboardUser';
import HandlerAuthorization from '../../controller/handlers/HandlerAuthorization';
import Header from '../../components/Template/Header';

export default function Dashboard() {
  const navigate = useNavigate();
  const [authorizationed, setAuthorizationed] = useState(false);
  const { authorization } = HandlerAuthorization();
  useEffect(() => {
    if (!authorizationed) {
      (async () => {
        const data = await authorization();
        if (data.status === 'success') {
          setAuthorizationed(true);
        } else {
          navigate('/', { replace: true });
        }
      })();
    }
    return (() => {
      setAuthorizationed(false);
    });
  }, []);
  return (
    <>
      <Header
        authorizationed={authorizationed}
        className="z-50 relative"
      />
      {
        authorizationed && <DashboardUser />
      }
    </>
  );
}
