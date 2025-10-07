import React, { useState } from 'react';
import { Eye, FileText, ArrowRight } from 'lucide-react';
import App from './App';
import ContractApp from './ContractApp';

const AppSwitcher: React.FC = () => {
    const [currentApp, setCurrentApp] = useState<'ophthalmology' | 'contracts'>('ophthalmology');

    const switchToApp = (app: 'ophthalmology' | 'contracts') => {
        setCurrentApp(app);
    };

    if (currentApp === 'contracts') {
        return (
            <div className="bg-black">
                {/* App Selection Header */}
                <div className="fixed top-4 left-4 z-50">
                    <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
                        <h3 className="text-sm font-medium text-zinc-300 mb-3">Seleccionar Aplicación</h3>
                        <div className="space-y-2">
                            <button
                                onClick={() => switchToApp('ophthalmology')}
                                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-300 bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                            >
                                <Eye size={16} />
                                <span>Investigación Oftalmológica</span>
                            </button>
                            <button
                                onClick={() => switchToApp('contracts')}
                                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-300 bg-green-600 text-white"
                            >
                                <FileText size={16} />
                                <span>Análisis de Contratos</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Current App Indicator */}
                <div className="fixed top-4 right-4 z-50">
                    <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-lg px-4 py-2">
                        <div className="flex items-center gap-2 text-sm">
                            <FileText size={16} className="text-green-400" />
                            <span className="text-zinc-300">Análisis de Contratos</span>
                            <ArrowRight size={14} className="text-zinc-500" />
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
            <div className="fixed top-4 left-4 z-50">
                <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-xl p-4">
                    <h3 className="text-sm font-medium text-zinc-300 mb-3">Seleccionar Aplicación</h3>
                    <div className="space-y-2">
                        <button
                            onClick={() => switchToApp('ophthalmology')}
                            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-300 bg-blue-600 text-white"
                        >
                            <Eye size={16} />
                            <span>Investigación Oftalmológica</span>
                        </button>
                        <button
                            onClick={() => switchToApp('contracts')}
                            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-300 bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                        >
                            <FileText size={16} />
                            <span>Análisis de Contratos</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Current App Indicator */}
            <div className="fixed top-4 right-4 z-50">
                <div className="bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-lg px-4 py-2">
                    <div className="flex items-center gap-2 text-sm">
                        <Eye size={16} className="text-blue-400" />
                        <span className="text-zinc-300">Investigación Oftalmológica</span>
                        <ArrowRight size={14} className="text-zinc-500" />
                    </div>
                </div>
            </div>

            <App />
        </div>
    );
};

export default AppSwitcher;
