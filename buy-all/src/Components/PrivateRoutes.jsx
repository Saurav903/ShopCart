import {Navigate} from "react-router-dom";
import { AuthContext } from '../Context/AuthContextProvider';
import {useContext} from "react";
function PrivateRoutes({children}) {
    const {isAuth} = useContext(AuthContext);
    if(!isAuth){
        return <Navigate to="/login" />
    }
    return children;
}
    

export default PrivateRoutes;