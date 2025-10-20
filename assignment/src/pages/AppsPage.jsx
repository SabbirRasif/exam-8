
import React, { useState, useMemo } from 'react';
import AppCard from '../components/AppCard';
import AppList from '../data/AppList.json'; 
import { FaSearch, FaSortDown } from 'react-icons/fa';

const AppsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('high-low'); 

    const filteredApps = useMemo(() => {
        let list = AppList.filter(app => 
            app.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        list.sort((a, b) => {
            if (sortOrder === 'high-low') {
                return b.downloads - a.downloads;
            } else {
                return a.downloads - b.downloads;
            }
        });

        return list;
    }, [searchTerm, sortOrder]);

    const totalApps = AppList.length;

    return (
        <div className="bg-gray-50 py-16 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-800 mb-2">
                        Our All Applications
                    </h1>
                    <p className="text-xl text-gray-500">
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                    {/* App Count */}
                    <div className="text-xl font-bold text-gray-800 mb-4 sm:mb-0">
                        ({filteredApps.length}) Apps Found
                    </div>
                    <div className="flex space-x-4 w-full sm:w-auto">
                        <label className="input input-bordered flex items-center gap-2 bg-gray-50 flex-grow border-gray-300">
                            <FaSearch className="w-4 h-4 opacity-70" />
                            <input
                                type="text"
                                className="grow bg-transparent"
                                placeholder="Search Apps"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </label>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn bg-primary text-white shadow-md hover:bg-violet-700 rounded-lg font-semibold">
                                Sort By Downloads
                                <FaSortDown />
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-30 menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button onClick={() => setSortOrder('high-low')}>
                                        Downloads: High-Low
                                    </button>
                                </li>
                                <li>
                                    <button onClick={() => setSortOrder('low-high')}>
                                        Downloads: Low-High
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {filteredApps.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                        {filteredApps.map((app) => (
                            <AppCard key={app.id} app={app} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-xl shadow-md border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-700">
                            No App Found
                        </h2>
                        <p className="text-gray-500 mt-2">
                            Try searching for another app name.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppsPage;