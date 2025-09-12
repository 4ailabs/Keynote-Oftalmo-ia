import React from 'react';
import { MEDICAL_DISCLAIMERS } from '../constants';
import { AlertTriangle } from 'lucide-react';

export const Disclaimer: React.FC = () => {
    return (
        <div className="mt-8 bg-yellow-900/20 border border-yellow-500/30 text-yellow-300 rounded-lg p-6">
            <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 mr-4 text-yellow-400 flex-shrink-0" />
                <div>
                    <h3 className="font-bold mb-2">Información Importante</h3>
                    <ul className="space-y-2 text-sm">
                        {Object.values(MEDICAL_DISCLAIMERS).map((disclaimer, index) => (
                           <li key={index}>{disclaimer}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
