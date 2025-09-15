import React from 'react';
import { Bot } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="py-4 sm:py-6 text-center border-t border-zinc-800/50 mt-8 sm:mt-12">
            <div className="container mx-auto px-4">
                <div className="space-y-2">
                    <p className="text-xs sm:text-sm text-zinc-600 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                        <span className="hidden sm:inline">Desarrollado por </span>
                        <a href="https://4ailabs.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200 flex items-center gap-1">
                            <Bot size={12} className="sm:w-3.5 sm:h-3.5 text-blue-400" />
                            4ailabs
                        </a>
                        <span className="hidden sm:inline">- Especialistas en creación de agentes de IA</span>
                        <span className="sm:hidden text-xs text-zinc-500">Especialistas en agentes de IA</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};