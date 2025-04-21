import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserContextProvider from './context/userContextprovider';
import Login from './components/login';
import Profile from './components/profile';
import { Todos } from './components/todos';
import AddTodo from './components/addtodo';

function App() {
  return (
    <Router>
      <div style={styles.wrapper}>
        <nav style={styles.nav}>
          <Link to="/redux" style={styles.link}>🛠 Redux Toolkit</Link>
          <Link to="/context" style={styles.link}>👤 useContext</Link>
        </nav>

        <div style={styles.container}>
          <Routes>
            <Route
              path="/redux"
              element={
                <div style={styles.card}>
                  <h1 style={styles.heading}>Redux Toolkit Todo</h1>
                  <AddTodo />
                  <Todos />
                </div>
              }
            />
            <Route
              path="/context"
              element={
                <UserContextProvider>
                  <div style={styles.card}>
                    <h1 style={styles.heading}>useContext</h1>
                    <Login />
                    <Profile />
                  </div>
                </UserContextProvider>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  wrapper: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center', 
    background: 'linear-gradient(135deg, #f0f2f5, #e0e7ff)',
    padding: '0 2rem', 
    boxSizing: 'border-box',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    padding: '1rem 2rem',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    width: '100%', 
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  link: {
    textDecoration: 'none',
    color: '#3b82f6',
    fontSize: '1.2rem',
    fontWeight: 600,
  },
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: '2rem', 
  },
  card: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '2rem',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    boxSizing: 'border-box',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    color: '#111827',
  },
};

export default App;
