import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';
import { FilterProvider } from './context/FilterContext';

function App() {
    return (
        <BrowserRouter>
            <div className='flex flex-col min-h-screen'>
                <Header />
                <main className='flex-grow'>
                    <FilterProvider>
                        <AppRoutes />
                    </FilterProvider>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
