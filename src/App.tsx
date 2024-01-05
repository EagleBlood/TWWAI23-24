import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';


function App() {
   return (
       <Router>
           <nav style={{ margin: 10 }}>
               <Link to="/" style={{ padding: 5 }}>
                   Home
               </Link>
           </nav>
           <Routes>
               <Route path="/" element={<Home />} />
           </Routes>
       </Router>
   );
}
export default App