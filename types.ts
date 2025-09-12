export interface Source {
  web: {
    uri: string;
    title: string;
  };
}

export interface ResearchStep {
  id: number;
  title:string;
  result: string | null;
  sources: Source[] | null;
  status: 'pending' | 'in-progress' | 'completed';
}

export interface MedicalDisclaimers {
  ai_limitation: string;
  supervision_required: string;
  evidence_quality: string;
  not_diagnostic: string;
  source_validation: string;
}
