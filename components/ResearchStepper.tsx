import React from 'react';
import { ResearchStep } from '../types';
import { Spinner } from './Spinner';
import { CheckCircle, Circle } from 'lucide-react';

interface ResearchStepperProps {
    plan: ResearchStep[];
    appState: 'planning' | 'executing' | 'reporting' | 'done' | 'error';
}

export const ResearchStepper: React.FC<ResearchStepperProps> = ({ plan, appState }) => {
    const getStatusMessage = () => {
        if (appState === 'planning') return "Generando plan de investigación...";
        if (appState === 'reporting') return "Generando reporte final...";
        const inProgressStep = plan.find(s => s.status === 'in-progress');
        if (inProgressStep) return `Ejecutando paso ${inProgressStep.id}: ${inProgressStep.title}`;
        return "Investigación en cola...";
    };

    return (
        <div className="mb-6">
            <div className="p-3 bg-zinc-900/50 rounded-lg text-center mb-4 flex items-center justify-center gap-2">
                <Spinner />
                <span className="font-semibold text-zinc-300">{getStatusMessage()}</span>
            </div>
            
            <ol className="space-y-2">
                {plan.map((step) => (
                    <li key={step.id} className="flex items-center gap-3 p-2 bg-zinc-900/30 rounded-md">
                        {step.status === 'completed' && <CheckCircle size={20} className="text-green-500 flex-shrink-0" />}
                        {step.status === 'in-progress' && <div className="w-5 h-5 flex-shrink-0"><Spinner /></div>}
                        {step.status === 'pending' && <Circle size={20} className="text-zinc-500 flex-shrink-0" />}
                        <span className={`text-sm ${step.status === 'pending' ? 'text-zinc-500' : 'text-zinc-200'}`}>
                            {step.title}
                        </span>
                    </li>
                ))}
            </ol>
        </div>
    );
};
