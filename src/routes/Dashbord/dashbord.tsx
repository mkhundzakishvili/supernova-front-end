import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { gql, useLazyQuery } from '@apollo/client';
import './dashbord.css';

const FETCH_TOTAL_SIGN_INS = gql`
    query Query {
        sumOfLogIns
}
`;

const FETCH_USER = gql`
query User {
  user {
    id
    username
    signInCount
  }
}
`;

export const Dashbord = () => {
const [totalSignIns, setTotalSignIns] = useState(0);
const [userInfo, serUserInfo] = useState<{id: string, username: string, signInCount: number}>();
const { token, logout }:any = useAuth();
const [sumOfTotalSignIns,{client}] = useLazyQuery(FETCH_TOTAL_SIGN_INS);
const [fetchUser] = useLazyQuery(FETCH_USER);


  const handleLogout = async () => {
    await logout();
  };

    useEffect(() => {
        sumOfTotalSignIns({client}).then(result => setTotalSignIns(result.data.sumOfLogIns));
        fetchUser({client}).then(result => serUserInfo(result.data.sumOfLogIns));
  },[]);

useEffect(() => {
    const ws = new WebSocket('http://0.0.0.0:4001');

    ws.onerror = () => console.error;
    ws.onopen = () => console.log('open');
    ws.onmessage = (data) => {
        
        console.log('received: ', data);
        setTotalSignIns(data.data);
    }; 

}, []);



  return (
    <div>
      <h1>This is a Main page</h1>
      <h2>User - {userInfo?.username}</h2>
      <h2>Sign In Count - {userInfo?.signInCount}</h2>
      <h1>Total Sum of Users Sign Ins: {totalSignIns}</h1>
      <button className="button"onClick={handleLogout}>Logout</button>
    </div>
  );
};
