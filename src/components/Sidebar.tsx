import React from 'react';
import { Link } from 'react-router-dom';
import { useKeycloak } from "@react-keycloak/web";

const Sidebar = () => {
    // const { keycloak, initialized } = useKeycloak();
    return (
        <div className=''>
            <ul className="list-unstyled">
                <li><Link className='text-white text-decoration-none fs-5' to='/'>Home</Link></li>
                <li><Link className='text-white text-decoration-none fs-5' to='/search'>Search</Link></li>
                <li><Link className='text-white text-decoration-none fs-5' to='/playlist'>Playlist</Link></li>
                <li><Link className='text-white text-decoration-none fs-5' to='/favourite'>Favourites</Link></li>
            </ul>
            <div className="hover:text-gray-200">
                 {/* {!keycloak.authenticated && (
                   <button
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak.login()}
                   >
                     Login
                   </button>
                 )} */}

                 {/* {!!keycloak.authenticated && (
                   <button
                     type="button"
                     className="text-blue-800"
                     onClick={() => keycloak.logout()}
                   >
                     Logout
                      ({keycloak?.tokenParsed?.preferred_username})
                   </button>
                 )} */}
               </div>          
        </div>
    );
};

export default Sidebar;