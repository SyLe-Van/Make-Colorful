import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/home';
import Cinema from '~/pages/cinema';
import Fashion from '~/pages/fashion';
import Grooming from '~/pages/grooming';
import LifeStyle from '~/pages/lifestyle';
import { publicRoutes } from './routes';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cinema" element={<Cinema />} />
                    <Route path="/fashion" element={<Fashion />} />
                    <Route path="/grooming" element={<Grooming />} />
                    <Route path="/lifestyle" element={<LifeStyle />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
