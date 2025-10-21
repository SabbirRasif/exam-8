import React, { useState, useMemo } from 'react';
import AppCard from '../components/AppCard';
import AppList from '../data/AppList.json'; 
import { FaSearch } from 'react-icons/fa';

const AppsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredApps = useMemo(() => {
        if (!searchTerm) {
            return AppList;
        }
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return AppList.filter(app =>
            app.title.toLowerCase().includes(lowerCaseSearchTerm) ||
            app.companyName.toLowerCase().includes(lowerCaseSearchTerm) ||
            app.description.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, [searchTerm]);

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">App Store</h1>
            <p className="text-gray-500 mb-8">Discover and download the latest and greatest applications.</p>
            
        
            <div className="mb-10 relative max-w-2xl mx-auto">
                <input
                    type="text"
                    placeholder="Search apps, games, and companies..."
                    className="input input-bordered w-full pl-12 pr-4 py-3 rounded-full text-lg shadow-lg focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                {filteredApps.length > 0 ? (
                    filteredApps.map(app => (
                        <AppCard key={app.id} app={app} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-10">
                        <p className="text-xl text-gray-600">No results found for "{searchTerm}".</p>
                        <p className="text-md text-gray-400 mt-2">Try a different search term or category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppsPage;
