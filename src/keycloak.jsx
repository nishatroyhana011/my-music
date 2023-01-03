import Keycloak from "keycloak-js";
// const keycloak = new Keycloak('./keycloak.json');

const keycloak = new Keycloak({
    url: "http://localhost:8080/",
   //  url: "http://localhost:8080/auth",
    realm: "master",
    clientId: "my-music",
   });


export default keycloak;