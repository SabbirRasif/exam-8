// src/components/InstalledAppCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaStar, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    return num;
};

const InstalledAppCard = ({ app, onUninstall }) => {
    const handleUninstall = () => {
        onUninstall(app.id);
        toast.info(`${app.title} has been successfully uninstalled!`);
    };

    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-xl rounded-xl mb-4 border border-gray-100 hover:shadow-2xl transition duration-300">
            
            <Link to={`/apps/${app.id}`} className="flex items-center space-x-4 flex-grow min-w-0">
                <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                    </svg>
                </div>

                <div className="truncate">
                    <h2 className="text-lg font-semibold text-gray-800 truncate">{app.title}</h2>
                    <div className="flex items-center space-x-3 text-sm text-gray-500 mt-1">
                        <div className="flex items-center">
                            <FaDownload className="w-3 h-3 text-primary mr-1" />
                            <span>{formatNumber(app.downloads)}</span>
                        </div>
                        <div className="flex items-center">
                            <FaStar className="w-3 h-3 text-secondary mr-1" />
                            <span>{app.ratingAvg}</span>
                        </div>
                        <span>{app.size} MB</span>
                    </div>
                </div>
            </Link>

            <button 
                onClick={handleUninstall} 
                className="btn btn-md bg-red-500 hover:bg-red-600 text-white rounded-lg flex-shrink-0 font-semibold border-none"
            >
                <FaTrashAlt />
                Uninstall
            </button>
        </div>
    );
};

export default InstalledAppCard;