import { createContext,useEffect,useState } from "react"

export const LoginContext = createContext()

export function LoginContextProvider({children}){
    const [user,setUser] = useState()
    useEffect(()=>{
        const localUser = JSON.parse(localStorage.getItem('user'))
        if(localUser){
            setUser(localUser)
        }
    },[])
    return(
        <LoginContext.Provider value={{user,setUser}}>
            {children}
        </LoginContext.Provider>
    )
}