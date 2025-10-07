import React, { useState } from 'react';
import { Eye, FileText, Monitor, ArrowRight } from 'lucide-react';
import App from './App';
import ContractApp from './ContractApp';
import MacApp from './MacApp';

const AppSwitcher: React.FC = () => {
    const [currentApp, setCurrentApp] = useState<'ophthalmology' | 'contracts' | 'mac'>('ophthalmology');

    const switchToApp = (app: 'ophthalmology' | 'contracts' | 'mac') => {
        console.log('Switching to app:', app);
        setCurrentApp(app);
    };

    if (currentApp === 'mac') {
        return (
            <div className="bg-black">
                {/* App Selection Header */}
                <div className="fixed top-2 left-2 z-50">
                    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-lg p-1">
                        <div className="flex gap-1">
                            <button
                                onClick={() => switchToApp('ophthalmology')}
                                className="p-1.5 rounded transition-all duration-300 bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
                                title="Investigación Oftalmológica"
                            >
                                <Eye size={14} />
                            </button>
                            <button
                                onClick={() => switchToApp('contracts')}
                                className="p-1.5 rounded transition-all duration-300 bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
                                title="Análisis de Contratos"
                            >
                                <FileText size={14} />
                            </button>
                            <button
                                onClick={() => switchToApp('mac')}
                                className="p-1.5 rounded transition-all duration-300 bg-orange-600 text-white"
                                title="Analizador Mac 18GB"
                            >
                                <Monitor size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Current App Indicator */}
                <div className="fixed top-2 right-2 z-50">
                    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-lg px-2 py-1">
                        <div className="flex items-center gap-1.5 text-xs">
                            <Monitor size={12} className="text-orange-400" />
                            <span className="text-zinc-300">Mac 18GB</span>
                        </div>
                    </div>
                </div>

                <MacApp />
            </div>
        );
    }

    if (currentApp === 'contracts') {
        return (
            <div className="bg-black">
                {/* App Selection Header */}
                <div className="fixed top-2 left-2 z-50">
                    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-lg p-1">
                        <div className="flex gap-1">
                            <button
                                onClick={() => switchToApp('ophthalmology')}
                                className="p-1.5 rounded transition-all duration-300 bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
                                title="Investigación Oftalmológica"
                            >
                                <Eye size={14} />
                            </button>
                            <button
                                onClick={() => switchToApp('contracts')}
                                className="p-1.5 rounded transition-all duration-300 bg-green-600 text-white"
                                title="Análisis de Contratos"
                            >
                                <FileText size={14} />
                            </button>
                            <button
                                onClick={() => switchToApp('mac')}
                                className="p-1.5 rounded transition-all duration-300 bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
                                title="Analizador Mac 18GB"
                            >
                                <Monitor size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Current App Indicator */}
                <div className="fixed top-2 right-2 z-50">
                    <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-lg px-2 py-1">
                        <div className="flex items-center gap-1.5 text-xs">
                            <FileText size={12} className="text-green-400" />
                            <span className="text-zinc-300">Contratos</span>
                        </div>
                    </div>
                </div>

                <ContractApp />
            </div>
        );
    }

    return (
        <div className="bg-black">
            {/* App Selection Header */}
            <div className="fixed top-2 left-2 z-50">
                <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-lg p-1">
                    <div className="flex gap-1">
                        <button
                            onClick={() => switchToApp('ophthalmology')}
                            className="p-1.5 rounded transition-all duration-300 bg-blue-600 text-white"
                            title="Investigación Oftalmológica"
                        >
                            <Eye size={14} />
                        </button>
                        <button
                            onClick={() => switchToApp('contracts')}
                            className="p-1.5 rounded transition-all duration-300 bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
                            title="Análisis de Contratos"
                        >
                            <FileText size={14} />
                        </button>
                        <button
                            onClick={() => switchToApp('mac')}
                            className="p-1.5 rounded transition-all duration-300 bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
                            title="Analizador Mac 18GB"
                        >
                            <Monitor size={14} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Current App Indicator */}
            <div className="fixed top-2 right-2 z-50">
                <div className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-lg px-2 py-1">
                    <div className="flex items-center gap-1.5 text-xs">
                        <Eye size={12} className="text-blue-400" />
                        <span className="text-zinc-300">Oftalmología</span>
                    </div>
                </div>
            </div>

            <App />
        </div>
    );
};

export default AppSwitcher;
