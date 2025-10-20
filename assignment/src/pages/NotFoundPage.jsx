
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 text-center py-16">
            <div className="max-w-md p-8">
                <div className="text-primary text-9xl font-extrabold mb-4">404</div>
                
                <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
                    Oops, page not found!
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    The URL you requested does not exist. It may have been moved or deleted.
                </p>
                <button 
                    onClick={() => navigate('/')} 
                    className="btn btn-lg bg-primary hover:bg-violet-700 text-white rounded-lg font-semibold shadow-xl border-none"
                >
                    Go Back Home
                </button>
            </div>
        </div>
    );
};

export default NotFoundPage;