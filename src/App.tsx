import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import TechStack from './components/sections/TechStack';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import RippleGrid from './components/reactbits/RippleGrid';
import { useReveal } from './hooks/useReveal';

function App() {
    useReveal();

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-page">
            {/* Animated grid sits behind every section, never catching clicks. */}
            <div
                aria-hidden
                className="pointer-events-none fixed inset-0 z-0"
            >
                <RippleGrid
                    gridColor="#7d6bff"
                    rippleIntensity={0.04}
                    gridSize={9}
                    gridThickness={22}
                    fadeDistance={1.4}
                    vignetteStrength={2.4}
                    glowIntensity={0.12}
                    opacity={0.5}
                    mouseInteraction
                    mouseInteractionRadius={1.1}
                />
            </div>

            <div className="relative z-10">
                <NavBar />
                <main>
                    <About />
                    <Projects />
                    <TechStack />
                    <Experience />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;
