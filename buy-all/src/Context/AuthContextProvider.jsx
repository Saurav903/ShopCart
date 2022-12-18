import {createContext,useState} from 'react'

export const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [categoryGet,setcategoryGet] = useState("");
    
    const [isAuth,setIsAuth] = useState(false);
   
    
    return (<AuthContext.Provider value={{setcategoryGet,categoryGet,setIsAuth,isAuth}}>{children}</AuthContext.Provider>);
}
export default AuthContextProvider;