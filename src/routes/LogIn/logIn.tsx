import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import './login.css';


export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login }:any = useAuth();



  const handleLogin = async (e:any) => {
    e.preventDefault();
    // Here you would usually send a request to your backend to authenticate the user
    // For the sake of this example, we're using a mock authentication
    if (username && password) {
      // Replace with actual authentication logic
      console.log('Clicked on handle Login');
      await login({ username, password });
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="cube-container">
      <div className="cube">
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            className={"classy-input"}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            className={"classy-input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button" type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};