import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Charts from './components/charts';
import ChatComponent from './components/chat';

function App() {
    return (
        <Router>
            <nav style={{ margin: 10 }}>
                <Link to="/" style={{ padding: 5 }}>
                    Home
                </Link>
                <Link to="/charts" style={{ padding: 5 }}>
                    Charts
                </Link>
                <Link to="/chat" style={{ padding: 5 }}>
                    Chat
                </Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/charts" element={<Charts />} />
                <Route path="/chat" element={<ChatComponent />} />
            </Routes>
        </Router>
    );
 }
export default App;