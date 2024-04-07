import Header from '../Navigation/Header/Header';
import Footer from '../Navigation/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
        </>
    );
    };

export default Layout;