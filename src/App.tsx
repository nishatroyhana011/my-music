import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './Router/Main';
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";


function App() {
  return (

    // <ReactKeycloakProvider
    //   authClient={keycloak}
    //   initOptions={{
    //     onLoad: "check-sso",
    //     // onLoad: "login-required",
    //     checkLoginIframe: false,
    //     // scope: "offline_access"
    //   }}
    // >
      <div className="App">

        <div className='container-fluid'>
          <div className='row vh-100 p-0'>
            <div className='col-sm-2 bg-info d-flex align-items-center justify-content-center vh-50 md:vh-100 px-0'>
              <Sidebar></Sidebar>
            </div>
            <div className='col-sm-10 mh-100 overflow-auto px-0'>
              <Main></Main>
            </div>
          </div>
        </div>
      </div>
    // </ReactKeycloakProvider>



  );
}

export default App;
