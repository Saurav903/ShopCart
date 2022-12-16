import {createContext,useState} from 'react'
export const AuthContext = createContext();
function AuthContextProvider({children}) {
    const [categoryGet,setcategoryGet] = useState("");

    return (<AuthContext.Provider value={{setcategoryGet,categoryGet}}>{children}</AuthContext.Provider>);
}
export default AuthContextProvider;