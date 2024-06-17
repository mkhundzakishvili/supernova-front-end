import { createContext, useContext, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { gql, useLazyQuery } from '@apollo/client';

const AuthContext = createContext({});

const LOG_IN = gql`
    query LogIn($username: String!, $password: String!) {
        logIn(username: $username, password: $password) {
            userId
            username
            token
        }
  }`

export const AuthProvider = ({ children }:any) => {
  const [token, setToken] = useLocalStorage("token", "");
  const navigate = useNavigate();
  const [logIn,{client}] = useLazyQuery(LOG_IN);


  const login = async (user:{username:string, password: string}) => {
    await logIn({
        variables:{
            username: user.username,
            password: user.password
        }
    }).then((response:any) => {
        //error case
        setToken(response.data['logIn'].token);
        navigate("../dashbord",{ replace: true });
    }).catch(err => console.error(err));
  };

  const  logout = async () => {
    await client.resetStore();
    navigate("../", { replace: true });
    
  };

  const value = useMemo(
    () => ({
      token,
      login,
      logout,
    }),
    [token]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};