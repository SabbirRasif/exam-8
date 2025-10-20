
import React from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaStar } from 'react-icons/fa';

const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num;
};

const AppCard = ({ app }) => {
    return (
        <Link to={`/apps/${app.id}`} className="card bg-white shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 rounded-xl cursor-pointer border border-gray-100">
            <div className="card-body p-4 items-center text-center">
               
                <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                    </svg>
                </div>
                
          
                <h2 className="card-title text-sm font-bold mt-3 text-gray-800 line-clamp-2 leading-tight">
                    {app.title}
                </h2>
                
             
                <div className="flex justify-center items-center space-x-3 text-xs text-gray-500 mt-1 font-medium">
                    <div className="flex items-center">
                        <FaDownload className="w-3 h-3 text-primary mr-1" />
                        <span>{formatNumber(app.downloads)}</span>
                    </div>
                    <div className="flex items-center">
                        <FaStar className="w-3 h-3 text-secondary mr-1" />
                        <span>{app.ratingAvg}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;