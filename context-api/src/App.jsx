import Login from "./components/Login";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import UserContextProvider from "./context/userContexProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Context + React</h1>
      <Login />
      <Profile />
      <Logout />
    </UserContextProvider>
  );
}

export default App;
