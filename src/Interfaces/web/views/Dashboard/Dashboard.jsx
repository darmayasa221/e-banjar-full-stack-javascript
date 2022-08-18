import React, { useEffect, useState } from 'react';
import DashboardUser from '../../components/Template/DashboardUser';
import HandlerAuthorization from '../../controller/handlers/HandlerAuthorization';
import Header from '../../components/Template/Header';

export default function Dashboard() {
  const [authorizationed, setAuthorizationed] = useState(false);
  const { authorization } = HandlerAuthorization();
  useEffect(() => {
    if (!authorizationed) {
      (async () => {
        const data = await authorization();
        if (data.status === 'success') {
          setAuthorizationed(true);
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
        linkOne="/logout"
        textLinkOne="Keluar"
      />
      {
        authorizationed && <DashboardUser />
      }
    </>
  );
}
