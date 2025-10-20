
import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const RootLayout = () => {
    const navigation = useNavigation();
    
    const isLoading = navigation.state === 'loading' || navigation.state === 'submitting';

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            
            {}
            {isLoading && (
                <div className="w-full h-1 fixed top-[72px] z-50">
                    <progress className="progress progress-primary w-full h-1"></progress> 
                </div>
            )}
            
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;