
import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import InstalledAppCard from '../components/InstalledAppCard';
import useLocalStorage from '../hooks/useLocalStorage';
import AppList from '../data/AppList.json'; 

const InstallationPage = () => {
    const [installedAppIds, setInstalledAppIds] = useLocalStorage('installedApps', []);
    const installedApps = useMemo(() => {
        return AppList.filter(app => installedAppIds.includes(app.id));
    }, [installedAppIds]);

    const handleUninstall = (appIdToRemove) => {
        setInstalledAppIds(prev => prev.filter(id => id !== appIdToRemove));
    };

    return (
        <div className="bg-gray-50 py-16 min-h-screen">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-gray-800 mb-2">
                        My Installation
                    </h1>
                    <p className="text-xl text-gray-500">
                        These are the applications you currently have installed.
                    </p>
                </div>
                <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100">
                    <div className="text-xl font-bold text-gray-800">
                        {installedApps.length} Apps Installed
                    </div>
                    <div className="text-sm text-gray-500">
                        Sorted by installation date
                    </div>
                </div>
                {installedApps.length > 0 ? (
                    <div className="space-y-4">
                        {installedApps.map((app) => (
                            <InstalledAppCard 
                                key={app.id} 
                                app={app} 
                                onUninstall={handleUninstall} 
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-xl shadow-md border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-700">
                            No Apps Installed
                        </h2>
                        <p className="text-gray-500 mt-2 text-lg">
                            Visit the <Link to="/apps" className="text-primary font-bold hover:underline">Apps</Link> page to install your favorites!
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default InstallationPage;