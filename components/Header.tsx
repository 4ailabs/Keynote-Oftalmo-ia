import React from 'react';
import { Stethoscope } from 'lucide-react';

export const Header: React.FC = () => {
    return (
        <header className="bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-zinc-800/50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-3">
                        <Stethoscope className="text-blue-500" size={28} />
                        <h1 className="text-xl font-bold text-zinc-100 tracking-tight">
                           Agente IA de Oftalmología
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    );
};