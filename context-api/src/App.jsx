import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserContextProvider from './context/userContextprovider';
import Login from './components/login';
import Profile from './components/profile';
import { Todos } from './components/todos';
import AddTodo from './components/addtodo';
import CustomHook from './components/customhook';
function App() {
  return (
    <Router>
      <div >
        <nav>
          <Link to="/redux" >🛠 Redux Toolkit</Link>
          <Link to="/context" >👤 useContext</Link>
          <Link to="/customHook" >👤 Custom Hook</Link>

        </nav>

        <div >
          <Routes>
            <Route
              path="/redux"
              element={
                <div >
                  <h1 >Redux Toolkit Todo</h1>
                  <AddTodo />
                  <Todos />
                </div>
              }
            />
            <Route
              path="/context"
              element={
                <UserContextProvider>
                  <div >
                    <h1 >useContext</h1>
                    <Login />
                    <Profile />
                  </div>
                </UserContextProvider>
              }
            />
            <Route
              path="/customHook"
              element={
                
                  <div >
                    <h1>useContext</h1>
                    <CustomHook />
                    
                  </div>
                
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
