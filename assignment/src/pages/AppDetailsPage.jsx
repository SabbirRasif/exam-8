import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaDownload, FaTags, FaRocket, FaGlobe } from 'react-icons/fa';
import { toast } from 'react-toastify';
import AppListData from '../data/AppList.json'; // Ensure this path is correct!

// Safely assign AppList, defaulting to an empty array if import fails
const AppList = Array.isArray(AppListData) ? AppListData : []; 

// Utility function to format numbers (e.g., 8000000 -> 8M)
const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num;
};

// Utility function to get the current list of installed app IDs from localStorage
const getInstalledApps = () => {
    const installed = localStorage.getItem('installedApps');
    return installed ? JSON.parse(installed) : [];
};

// Utility function to save the list of installed app IDs to localStorage
const saveInstalledApps = (appIds) => {
    localStorage.setItem('installedApps', JSON.stringify(appIds));
};

const AppDetailsPage = () => {
    const { appId } = useParams();
    const navigate = useNavigate();

    const [installedApps, setInstalledApps] = useState(getInstalledApps);

    // CRITICAL: Find the app using the ID from the URL params
    const app = AppList.find(a => a.id === parseInt(appId));

    // Check if the app was found. If not, redirect to the error page.
    useEffect(() => {
        if (!app) {
            navigate('/error/app-not-found');
        }
    }, [app, navigate]);

    if (!app) {
        return null; // Don't render anything while redirecting
    }

    const isInstalled = installedApps.includes(app.id);

    // Installation handler
    const handleInstall = () => {
        if (!isInstalled) {
            const newInstalledApps = [...installedApps, app.id];
            setInstalledApps(newInstalledApps);
            saveInstalledApps(newInstalledApps);
            toast.success(`Successfully installed ${app.title}!`, {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
            });
        }
    };

    // Rating Calculation Helper
    const totalReviews = app.reviews;
    const ratingBars = app.ratings.map(rating => ({
        ...rating,
        percentage: ((rating.count / totalReviews) * 100) || 0,
    })).reverse(); // Reverse to display 5-star first

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <div className="bg-white rounded-xl shadow-2xl overflow-hidden p-6 sm:p-10">
                
                {/* Header Section (Icon, Title, Install Button) */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-6 mb-6">
                    <div className="flex items-center space-x-6">
                        {/* App Icon (Placeholder for now) */}
                        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-100 rounded-3xl flex items-center justify-center shadow-lg flex-shrink-0 overflow-hidden">
                             {/* Using a placeholder SVG here, as image URLs are not provided */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-gray-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                            </svg>
                        </div>
                        
                        {/* Title and Company */}
                        <div className="mt-3 md:mt-0">
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                                {app.title}
                            </h1>
                            <p className="text-xl text-gray-500 font-medium mt-1">
                                {app.companyName}
                            </p>
                        </div>
                    </div>

                    {/* Install/Installed Button */}
                    <div className="mt-6 md:mt-0">
                        <button 
                            className={`btn btn-lg w-full sm:w-80 rounded-full font-bold text-lg transition duration-300 transform shadow-xl 
                                ${isInstalled 
                                    ? 'bg-gray-400 text-white cursor-default' 
                                    : 'bg-green-600 hover:bg-green-700 text-white active:scale-95'
                                }`}
                            onClick={handleInstall}
                            disabled={isInstalled}
                        >
                            {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
                        </button>
                    </div>
                </div>

                {/* Main Content: Description and Ratings */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* Column 1: Description and App Stats */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                            <FaTags className="mr-3 text-primary" /> Overview
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {app.description}
                        </p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 p-4 bg-gray-50 rounded-lg border">
                            <div className="text-center">
                                <p className="text-2xl font-extrabold text-gray-900 flex items-center justify-center">
                                    {app.ratingAvg} <FaStar className="ml-1 text-yellow-400 w-5 h-5" />
                                </p>
                                <p className="text-sm text-gray-500 font-medium">Rating</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-extrabold text-gray-900 flex items-center justify-center">
                                    {formatNumber(app.reviews)}
                                </p>
                                <p className="text-sm text-gray-500 font-medium">Reviews</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-extrabold text-gray-900 flex items-center justify-center">
                                    {formatNumber(app.downloads)}+
                                </p>
                                <p className="text-sm text-gray-500 font-medium">Downloads</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl font-extrabold text-gray-900 flex items-center justify-center">
                                    {app.size} MB
                                </p>
                                <p className="text-sm text-gray-500 font-medium">Size</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-gray-700 mb-3 flex items-center">
                                <FaRocket className="mr-2 text-primary" /> Developed By
                            </h3>
                            <div className="flex items-center space-x-4">
                                <FaGlobe className="text-gray-500 w-6 h-6" />
                                <p className="text-lg text-gray-600">{app.companyName}</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Rating Breakdown */}
                    <div className="lg:col-span-1 p-5 bg-gray-50 rounded-lg shadow-inner">
                        <h2 className="text-2xl font-bold text-gray-800 mb-5">Rating Breakdown</h2>
                        
                        {ratingBars.map((rating, index) => (
                            <div key={index} className="flex items-center mb-3">
                                <span className="w-10 text-sm font-semibold text-gray-700 mr-2">{rating.name}</span>
                                <div className="flex-grow bg-gray-200 rounded-full h-2.5">
                                    <div 
                                        className="bg-primary h-2.5 rounded-full" 
                                        style={{ width: `${rating.percentage}%` }}
                                        title={`${rating.count} reviews`}
                                    ></div>
                                </div>
                                <span className="w-12 text-right text-sm text-gray-500 ml-2">
                                    {formatNumber(rating.count)}
                                </span>
                            </div>
                        ))}

                        <div className="mt-6 pt-4 border-t border-gray-200">
                            <p className="text-lg font-medium text-gray-700">Total Reviews: {formatNumber(totalReviews)}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AppDetailsPage;
