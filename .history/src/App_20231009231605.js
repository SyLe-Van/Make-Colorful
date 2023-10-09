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
                    {publicRoutes.map((route) => {
                        return <Route />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
