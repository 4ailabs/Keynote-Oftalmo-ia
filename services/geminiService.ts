import { GoogleGenAI } from "@google/genai";
import { createResearchPlanPrompt, createExecuteStepPrompt, createFinalReportPrompt } from '../constants';
import { ResearchStep, Source } from '../types';

// This is a placeholder for the API key.
// In a real application, this should be handled securely.
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });
const model = "gemini-2.5-flash";

/**
 * Generates a research plan based on the user's query.
 * @param userQuery The user's initial query.
 * @returns A promise that resolves to an array of plan steps.
 */
export const generatePlan = async (userQuery: string): Promise<string[]> => {
    const prompt = createResearchPlanPrompt(userQuery);
    const response = await ai.models.generateContent({
        model,
        contents: prompt,
    });
    
    const planText = response.text;
    
    // Parse the planText into an array of strings
    return planText
        .split('\n')
        .map(line => line.replace(/^\d+\.\s*/, '').trim())
        .filter(line => line.length > 0);
};

/**
 * Executes a single step of the research plan.
 * @param userQuery The original user query.
 * @param plan The full research plan.
 * @param currentStep The specific step to execute.
 * @returns A promise that resolves to the result and sources for the step.
 */
export const executeStep = async (userQuery: string, plan: ResearchStep[], currentStep: ResearchStep): Promise<{ result: string; sources: Source[] }> => {
    const prompt = createExecuteStepPrompt(userQuery, plan, currentStep);
    
    const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: { tools: [{ googleSearch: {} }] }
    });
    
    const result = response.text;
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
    const sources = groundingMetadata?.groundingChunks?.filter(chunk => chunk.web) || [];
    
    return { result, sources: sources as Source[] };
};

/**
 * Generates the final, consolidated report.
 * @param userQuery The original user query.
 * @param completedSteps The list of completed research steps with their results.
 * @returns A promise that resolves to the final report in Markdown format.
 */
export const generateReport = async (userQuery: string, completedSteps: ResearchStep[]): Promise<string> => {
    const prompt = createFinalReportPrompt(userQuery, completedSteps);
    
    const response = await ai.models.generateContent({
        model,
        contents: prompt,
        // No search needed for the final report as it synthesizes existing data.
    });

    return response.text;
};
