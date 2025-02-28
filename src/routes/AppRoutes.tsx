import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Menu from '../pages/Menu';
import NotFound from '../components/NotFound/NotFound';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
