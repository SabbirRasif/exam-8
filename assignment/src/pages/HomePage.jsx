
import React from 'react';
import { Link } from 'react-router-dom';
import AppCard from '../components/AppCard';
import AppList from '../data/AppList.json'; 
import { FaGooglePlay, FaApple, FaChartLine, FaStar, FaThLarge } from 'react-icons/fa';

const HomePage = () => {
    const topApps = AppList.slice(0, 8); 

    const stats = [
        { label: "Total Downloads", value: "29.6M", trend: "21% More Than Last Month", icon: FaChartLine, color: "text-accent" },
        { label: "Total Reviews", value: "906K", trend: "46% More Than Last Month", icon: FaStar, color: "text-secondary" },
        { label: "Active Apps", value: "132+", trend: "31 More Will Launch", icon: FaThLarge, color: "text-white" },
    ];

    return (
        <div className="bg-gray-50">
            <div className="pt-24 pb-16 bg-white text-center shadow-inner">
                <div className="container mx-auto px-4">
                    <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-4">
                        We Build <span className="text-primary"><br />Productive</span> Apps
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                       At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                    <div className="flex justify-center space-x-6 mb-16">
                        <a href="https://www.apple.com/app-store/" target="_blank" className="btn btn-lg bg-primary hover:bg-violet-700 text-white shadow-xl px-8 py-3 rounded-xl border-none text-base">
                            <FaApple className="w-5 h-5 mr-2" /> App Store
                        </a>
                        <a href="https://play.google.com/" target="_blank" className="btn btn-lg bg-green-500 hover:bg-green-600 text-white shadow-xl px-8 py-3 rounded-xl border-none text-base">
                            <FaGooglePlay className="w-5 h-5 mr-2" /> Google Play
                        </a>
                    </div>
                    <div className="relative max-w-5xl mx-auto">
                        <div className="bg-gray-200 h-96 lg:h-[500px] rounded-2xl flex items-center justify-center shadow-2xl shadow-gray-300">
                            <p className="text-gray-500 text-xl"><img src="/assets/hero.png" alt="" srcset="" /></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary py-16 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Trusted By Millions, Built For You
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label} className="p-6">
                                <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color}`} />
                                <div className="text-6xl font-extrabold mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-xl font-semibold mb-1">
                                    {stat.label}
                                </div>
                                <p className="text-sm opacity-90">
                                    {stat.trend}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
                        Trending Apps
                    </h2>
                    <p className="text-center text-gray-500 mb-12 text-lg">
                        Explore All Trending Apps on the Market developed by us
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {topApps.map((app) => (
                            <AppCard key={app.id} app={app} />
                        ))}
                    </div>

                
                    <div className="text-center mt-12">
                        <Link to="/apps" className="btn btn-lg bg-primary hover:bg-violet-700 text-white rounded-lg font-semibold shadow-xl border-none">
                            Show All
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePage;