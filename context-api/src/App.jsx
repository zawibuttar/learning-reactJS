import UserContextProvider from "./context/userContextprovider"
import Login from "./components/login"
import Profile from "./components/profile"


function App() {
  

  return (
    <UserContextProvider>
      <h1>react -context api</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
