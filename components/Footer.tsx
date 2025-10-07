import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="py-8 sm:py-12 text-center border-t border-zinc-800/50 mt-8 sm:mt-16 pb-20 sm:pb-12">
            <div className="container mx-auto px-4">
                <div className="space-y-6">
                    {/* 4ailabs branding section */}
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                                <Bot size={24} className="text-white" />
                            </div>
                            <div className="text-left">
                                <h3 className="text-xl font-bold text-zinc-100">4ailabs</h3>
                                <p className="text-sm text-zinc-400">Especialistas en agentes de IA</p>
                            </div>
                        </div>
                        
                        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 max-w-md">
                            <div className="flex items-center gap-2 mb-2">
                                <Sparkles size={16} className="text-blue-400" />
                                <span className="text-sm font-medium text-zinc-200">Desarrollamos agentes especializados</span>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                                Creando soluciones de IA avanzadas para sectores específicos como medicina, finanzas y más.
                            </p>
                        </div>
                        
                        <a 
                            href="https://4ailabs.vercel.app" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-sm transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg"
                        >
                            <Bot size={16} />
                            <span>Visitar 4ailabs</span>
                        </a>
                    </div>
                    
                    {/* Copyright */}
                    <div className="pt-4 border-t border-zinc-800/50">
                        <p className="text-xs text-zinc-500">
                            © 2024 4ailabs. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};