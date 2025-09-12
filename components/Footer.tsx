import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="py-6 text-center border-t border-zinc-800/50 mt-12">
            <div className="container mx-auto px-4">
                <p className="text-sm text-zinc-500">
                    &copy; {new Date().getFullYear()} Grupo de Investigación de IA. Solo para fines informativos y de investigación.
                </p>
            </div>
        </footer>
    );
};