import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRoutes from './routes/AppRoutes';

function App() {
    return (
        <BrowserRouter>
            <div className='flex flex-col min-h-screen'>
                <Header />
                <main className='flex-grow'>
                    <AppRoutes />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
