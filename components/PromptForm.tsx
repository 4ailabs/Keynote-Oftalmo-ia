import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Spinner } from './Spinner';

interface PromptFormProps {
    onSubmit: (query: string) => void;
    isLoading: boolean;
}

export const PromptForm: React.FC<PromptFormProps> = ({ onSubmit, isLoading }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(query);
    };

    const exampleQueries = [
        "Paciente de 65 años, diabético, presenta pérdida de visión súbita en ojo derecho.",
        "Mujer de 30 años con miodesopsias y fotopsias de inicio reciente.",
        "Análisis diferencial del síndrome de ojo rojo doloroso con visión borrosa."
    ];

    const handleExampleClick = (exampleQuery: string) => {
        setQuery(exampleQuery);
    };

    return (
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
            <form onSubmit={handleSubmit}>
                <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Describe el caso clínico aquí..."
                    className="w-full h-32 p-3 bg-zinc-900 border border-zinc-700 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                    disabled={isLoading}
                />
                <div className="mt-4 text-xs text-zinc-400">
                    <p className="font-semibold mb-2">Ejemplos:</p>
                    <ul className="space-y-1">
                        {exampleQueries.map((ex, i) => (
                             <li key={i}>
                                <button type="button" onClick={() => handleExampleClick(ex)} className="text-left hover:text-blue-400 transition-colors">
                                   - {ex}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    type="submit"
                    className="w-full mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-blue-700 disabled:bg-zinc-600 disabled:cursor-not-allowed"
                    disabled={isLoading || !query.trim()}
                >
                    {isLoading ? <Spinner /> : <Search size={20} />}
                    <span>{isLoading ? 'Investigando...' : 'Iniciar Investigación'}</span>
                </button>
            </form>
        </div>
    );
};
