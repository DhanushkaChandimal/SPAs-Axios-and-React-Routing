// Run npx create-vite spa-router --template react to create a new React project using Vite.
// Install react-router-dom to handle the navigation and routes by running: npm install react-router-dom
// Install Axios by running: npm install axios
import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Users from './components/Users';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  )
}

export default App
