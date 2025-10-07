import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ContractHeroSection } from './components/ContractHeroSection';
import { ContractFeaturesSection } from './components/ContractFeaturesSection';
import { ContractTechnologySection } from './components/ContractTechnologySection';
import { ContractWorkflowSection } from './components/ContractWorkflowSection';
import { ContractRiskAnalysisSection } from './components/ContractRiskAnalysisSection';
import { ContractDemoSection } from './components/ContractDemoSection';
import { ContractBrandingSection } from './components/ContractBrandingSection';
import { Footer } from './components/Footer';
import { FloatingNav } from './components/FloatingNav';

const ContractApp: React.FC = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const sectionRefs = {
        hero: useRef<HTMLElement>(null),
        features: useRef<HTMLElement>(null),
        technology: useRef<HTMLElement>(null),
        workflow: useRef<HTMLElement>(null),
        'risk-analysis': useRef<HTMLElement>(null),
        demo: useRef<HTMLElement>(null),
        branding: useRef<HTMLElement>(null),
    };

    const sections: (keyof typeof sectionRefs)[] = [
        'hero', 
        'features', 
        'technology', 
        'workflow', 
        'risk-analysis',
        'demo',
        'branding'
    ];

    const scrollToSection = (id: keyof typeof sectionRefs) => {
        sectionRefs[id].current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleScroll = useCallback(() => {
        const pageYOffset = window.scrollY;
        let currentSection = '';

        for (const sectionId of sections) {
            const section = sectionRefs[sectionId].current;
            if (section) {
                const sectionTop = section.offsetTop;
                if (pageYOffset >= sectionTop - 100) { // a small offset
                    currentSection = sectionId;
                }
            }
        }

        if (currentSection && currentSection !== activeSection) {
            setActiveSection(currentSection);
        }
    }, [activeSection, sectionRefs, sections]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className="bg-black">
            <FloatingNav sections={sections} activeSection={activeSection} onNavigate={scrollToSection} />
            <main>
                <ContractHeroSection ref={sectionRefs.hero} scrollToSection={scrollToSection} />
                <ContractFeaturesSection ref={sectionRefs.features} />
                <ContractTechnologySection ref={sectionRefs.technology} />
                <ContractWorkflowSection ref={sectionRefs.workflow} />
                <ContractRiskAnalysisSection ref={sectionRefs['risk-analysis']} />
                <ContractDemoSection ref={sectionRefs.demo} />
                <ContractBrandingSection ref={sectionRefs.branding} />
            </main>
            <Footer />
        </div>
    );
};

export default ContractApp;
