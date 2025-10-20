
import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AppList from '../data/AppList.json';
import useLocalStorage from '../hooks/useLocalStorage';
import { FaDownload, FaStar, FaUserFriends } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const formatStats = (num, unit) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}${unit}`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}${unit}`;
    return num;
};

const StatCard = ({ icon:  value, label, color }) => (
    <div className="text-left">
        <Icon className={`w-6 h-6 mb-2 ${color}`} />
        <div className="text-3xl font-extrabold text-gray-900">{value}</div>
        <div className="text-base text-gray-500 font-medium">{label}</div>
    </div>
);

const AppDetailsPage = () => {
    const { appId } = useParams();
    const app = useMemo(() => AppList.find(a => a.id === parseInt(appId)), [appId]);
    const [installedApps, setInstalledApps] = useLocalStorage('installedApps', []);

    if (!app) {
        return <Navigate to="/error/app-not-found" />; 
    }

    const isInstalled = installedApps.includes(app.id);

    const handleInstall = () => {
        if (!isInstalled) {
            setInstalledApps(prev => [...prev, app.id]);
            toast.success(`Successfully installed ${app.title}!`);
        }
    };

    return (
        <div className="bg-white py-12 lg:py-20 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                    <div className="w-full md:w-1/4 flex-shrink-0">
                        <div className="bg-gray-100 w-36 h-36 md:w-48 md:h-48 rounded-3xl mx-auto md:mx-0 flex items-center justify-center text-gray-600 text-3xl shadow-xl border-4 border-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex-grow">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
                            {app.title}
                        </h1>
                        <p className="text-xl text-gray-500 mb-8">
                            Developed by <span className="text-primary font-bold">{app.companyName}</span>
                        </p>
                        <div className="flex space-x-8 mb-10 border-b border-t py-4">
                            <StatCard icon={FaStar} value={app.ratingAvg} label="Avg. Rating" color="text-secondary" />
                            <StatCard icon={FaUserFriends} value={formatStats(app.reviews, 'K')} label="Total Reviews" color="text-primary" />
                            <StatCard icon={FaDownload} value={formatStats(app.downloads, 'M')} label="Downloads" color="text-green-500" />
                        </div>
                        <button 
                            className={`btn btn-lg w-full sm:w-80 rounded-full font-bold text-lg border-none shadow-lg transition-all ${isInstalled ? 'btn-disabled bg-gray-400 text-white' : 'bg-green-500 hover:bg-green-600 text-white'}`}
                            onClick={handleInstall}
                            disabled={isInstalled}
                        >
                            {isInstalled ? 'Installed' : `Install Now (${app.size} MB)`}
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 bg-gray-50 p-6 rounded-xl shadow-lg h-96 border border-gray-100">
                        <h2 className="text-2xl font-bold mb-6 text-gray-800">Review Breakdown</h2>
                        <ResponsiveContainer width="100%" height="80%">
                            <BarChart data={app.ratings} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" stroke="#4B5563" />
                                <Tooltip formatter={(value) => [`${value} votes`, 'Count']} />
                                <Bar dataKey="count" fill="#F97316" /> 
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-primary pb-3 inline-block">App Description</h2>
                        <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                            {app.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetailsPage;