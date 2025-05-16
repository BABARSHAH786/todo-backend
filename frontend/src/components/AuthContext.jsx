// import { use } from 'react';
// import {createContext,useState} from 'react';
// const  AuthContext = createContext();

// export function AuthProvider(){
//     const [auth, setAuth] = useState(() => {
//         const token = localStorage.getItem("token")
//         user = localStorage.getItem("user")
//         return token && user ? { token:JSON.parse(user) } : null;
//     });
//     const login = (data)=>{
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user",data.user);
//     }

//     return (
//         <AuthContext.Provider value={{ auth, login }}>
//             {children}
//         </AuthContext.Provider>
//     )

// }

// export const useAuth = () => useContext(AuthContext);
  