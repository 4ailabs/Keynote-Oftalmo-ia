import React, { useState, useRef, useEffect, useCallback } from 'react';
import { HeroSection } from './components/HeroSection';
import { IntroSection } from './components/IntroSection';
import { PhasesSection } from './components/PhasesSection';
import { TechnologySection } from './components/TechnologySection';
import { WorkflowSection } from './components/WorkflowSection';
import { ContextEngineeringSection } from './components/ContextEngineeringSection';
import { FeaturesSection } from './components/FeaturesSection';
import { StatsSection } from './components/StatsSection';
import { Footer } from './components/Footer';
import { FloatingNav } from './components/FloatingNav';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const sectionRefs = {
        hero: useRef<HTMLElement>(null),
        intro: useRef<HTMLElement>(null),
        phases: useRef<HTMLElement>(null),
        technology: useRef<HTMLElement>(null),
        workflow: useRef<HTMLElement>(null),
        'context-engineering': useRef<HTMLElement>(null),
        features: useRef<HTMLElement>(null),
        stats: useRef<HTMLElement>(null),
    };

    const sections: (keyof typeof sectionRefs)[] = [
        'hero', 
        'intro', 
        'phases', 
        'technology', 
        'workflow', 
        'context-engineering',
        'features', 
        'stats'
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
                <HeroSection ref={sectionRefs.hero} scrollToSection={scrollToSection} />
                <IntroSection ref={sectionRefs.intro} />
                <PhasesSection ref={sectionRefs.phases} />
                <TechnologySection ref={sectionRefs.technology} />
                <WorkflowSection ref={sectionRefs.workflow} />
                <ContextEngineeringSection ref={sectionRefs['context-engineering']} />
                <FeaturesSection ref={sectionRefs.features} />
                <StatsSection ref={sectionRefs.stats} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
