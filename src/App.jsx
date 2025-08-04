// Run npx create-vite spa-router --template react to create a new React project using Vite.
// Install react-router-dom to handle the navigation and routes by running: npm install react-router-dom
// Install Axios by running: npm install axios
import './App.css'
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
