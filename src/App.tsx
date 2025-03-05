import { BrowserRouter } from 'react-router-dom';
import './i18n';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';
import { FilterProvider } from './context/FilterContext';
import { LoadScript } from '@react-google-maps/api';

function App() {
    const apiKey: string = import.meta.env.VITE_MAPS_API_KEY;
    return (
        <BrowserRouter>
            <div className='flex flex-col min-h-screen'>
                <Header />
                <main className='flex-grow'>
                    <FilterProvider>
                        <LoadScript googleMapsApiKey={apiKey}>
                            <AppRoutes />
                        </LoadScript>
                    </FilterProvider>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
