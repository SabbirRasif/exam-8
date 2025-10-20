
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppNotFoundErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white text-center py-16">
            <div className="max-w-md p-8">
                <div className="text-secondary text-9xl font-extrabold mb-4">:(</div>
                
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                    APP NOT FOUND
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    The specific application you were looking for is not listed in our store.
                </p>
                <button 
                    onClick={() => navigate('/apps')} 
                    className="btn btn-lg bg-secondary hover:bg-orange-600 text-white rounded-lg font-semibold shadow-xl border-none"
                >
                    Browse All Apps
                </button>
            </div>
        </div>
    );
};

export default AppNotFoundErrorPage;