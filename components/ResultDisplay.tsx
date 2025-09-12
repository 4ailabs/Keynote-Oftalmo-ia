import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ResearchStep } from '../types';
import { ResearchStepper } from './ResearchStepper';
import { Spinner } from './Spinner';

interface ResultDisplayProps {
    appState: 'planning' | 'executing' | 'reporting' | 'done' | 'error';
    userQuery: string;
    researchPlan: ResearchStep[];
    finalReport: string | null;
    error: string | null;
    onNewSearch: () => void;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({
    appState,
    userQuery,
    researchPlan,
    finalReport,
    error,
    onNewSearch
}) => {
    
    const renderContent = () => {
        if (error) {
            return (
                <div className="bg-red-900/20 border border-red-500/30 text-red-300 rounded-lg p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">Error en la Investigación</h3>
                    <p>{error}</p>
                </div>
            );
        }

        if (finalReport) {
            return (
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 md:p-8">
                     <ReactMarkdown
                        children={finalReport}
                        remarkPlugins={[remarkGfm]}
                        components={{
                             h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-6 mb-4 pb-2 border-b border-zinc-700" {...props} />,
                             h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
                             h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-5 mb-2" {...props} />,
                             p: ({node, ...props}) => <p className="mb-4 text-zinc-300" {...props} />,
                             ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 pl-4" {...props} />,
                             ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 pl-4" {...props} />,
                             li: ({node, ...props}) => <li className="mb-2" {...props} />,
                             table: ({node, ...props}) => <table className="w-full border-collapse border border-zinc-600 mb-4" {...props} />,
                             th: ({node, ...props}) => <th className="border border-zinc-600 p-2 bg-zinc-700 font-semibold" {...props} />,
                             td: ({node, ...props}) => <td className="border border-zinc-600 p-2" {...props} />,
                             blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic text-zinc-400 my-4" {...props} />,
                        }}
                    />
                </div>
            )
        }
        
        return (
            <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-center mb-6">Investigación en Progreso...</h3>
                <ResearchStepper plan={researchPlan} appState={appState} />

                {researchPlan.filter(s => s.status === 'completed').map(step => (
                     <div key={step.id} className="mt-6 p-4 border border-zinc-700 rounded-lg bg-zinc-900/50">
                        <h4 className="font-semibold text-lg text-green-400">✓ Paso {step.id}: {step.title}</h4>
                        <div className="prose prose-invert prose-sm max-w-none mt-2 text-zinc-300">{step.result}</div>
                         {step.sources && step.sources.length > 0 && (
                            <div className="mt-4">
                                <h5 className="text-sm font-semibold mb-2 text-zinc-400">Fuentes:</h5>
                                <ul className="list-disc list-inside space-y-1">
                                    {step.sources.map((source, i) => (
                                        <li key={i} className="text-xs">
                                            <a href={source.web.uri} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                                {source.web.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                         )}
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-800/30 border border-zinc-700/50 rounded-xl p-4 mb-8">
                <p className="text-sm text-zinc-400"><strong>Consulta:</strong> {userQuery}</p>
            </div>
            
            {renderContent()}

             <div className="text-center mt-8">
                <button
                    onClick={onNewSearch}
                    className="px-6 py-2 bg-zinc-700 text-zinc-200 rounded-lg font-semibold hover:bg-zinc-600 transition-colors"
                >
                    Realizar Nueva Búsqueda
                </button>
            </div>
        </div>
    );
};
