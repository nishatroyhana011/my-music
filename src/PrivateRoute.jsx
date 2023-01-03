import { useKeycloak } from "@react-keycloak/web";
import Home from "./components/Home";

const PrivateRoute = ({ children }) => {
 const { keycloak } = useKeycloak();
 const isLoggedIn = keycloak.authenticated;
 console.log(isLoggedIn);

 return isLoggedIn ? children : <Home></Home>;
};

export default PrivateRoute;