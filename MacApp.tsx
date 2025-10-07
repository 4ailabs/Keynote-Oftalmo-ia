import React, { useRef, useCallback } from 'react';
import { MacHeroSection } from './components/MacHeroSection';
import { MacApproachesSection } from './components/MacApproachesSection';
import { MacPerformanceSection } from './components/MacPerformanceSection';
import { MacInstallationSection } from './components/MacInstallationSection';
import { MacSecuritySection } from './components/MacSecuritySection';
import { Footer } from './components/Footer';
import { FloatingNav } from './components/FloatingNav';

export default function MacApp() {
    const heroRef = useRef<HTMLElement>(null);
    const approachesRef = useRef<HTMLElement>(null);
    const performanceRef = useRef<HTMLElement>(null);
    const installationRef = useRef<HTMLElement>(null);
    const securityRef = useRef<HTMLElement>(null);

    const sectionRefs = {
        hero: heroRef,
        approaches: approachesRef,
        performance: performanceRef,
        installation: installationRef,
        security: securityRef
    };

    const sections = [
        { id: 'hero', label: 'Inicio', ref: heroRef },
        { id: 'approaches', label: 'Enfoques', ref: approachesRef },
        { id: 'performance', label: 'Rendimiento', ref: performanceRef },
        { id: 'installation', label: 'Instalación', ref: installationRef },
        { id: 'security', label: 'Seguridad', ref: securityRef }
    ];

    const scrollToSection = useCallback((sectionId: string) => {
        const sectionRef = sectionRefs[sectionId as keyof typeof sectionRefs];
        if (sectionRef?.current) {
            sectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }, [sectionRefs]);

    return (
        <div className="min-h-screen bg-black text-white">
            <MacHeroSection scrollToSection={scrollToSection} ref={heroRef} />
            <MacApproachesSection ref={approachesRef} />
            <MacPerformanceSection ref={performanceRef} />
            <MacInstallationSection ref={installationRef} />
            <MacSecuritySection ref={securityRef} />
            <Footer />
            <FloatingNav sections={sections} />
        </div>
    );
}
