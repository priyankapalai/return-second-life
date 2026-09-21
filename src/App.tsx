import { useState, useCallback } from 'react';
import { RotateCcw, ImageOff } from 'lucide-react';
import type { ObjectAnalysis } from './types';
import { demoObjects, createGenericAnalysis } from './data';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import ObjectUploader from './components/ObjectUploader';
import AnalysisAnimation from './components/AnalysisAnimation';
import DemoObjects from './components/DemoObjects';
import ObjectResult from './components/ObjectResult';
import SecondLifeMap from './components/SecondLifeMap';
import ReimagineIdeas from './components/ReimagineIdeas';
import EnvironmentalImpact from './components/EnvironmentalImpact';

type View = 'home' | 'analyze' | 'analyzing' | 'results';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [image, setImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<ObjectAnalysis | null>(null);
  const [isDemoImage, setIsDemoImage] = useState(false);

  const scrollTo = useCallback((id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setView('home');
      return;
    }
    if (id === 'analyze' || id === 'demo') {
      setView('analyze');
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const goAnalyze = useCallback(() => {
    setView('analyze');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  }, []);

  const handleDemoSelect = useCallback((obj: ObjectAnalysis) => {
    setImage(obj.image);
    setAnalysis(obj);
    setIsDemoImage(true);
    setView('analyze');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  }, []);

  const handleImageSet = useCallback((img: string | null) => {
    setImage(img);
    if (img) {
      setIsDemoImage(false);
    } else {
      setAnalysis(null);
      setIsDemoImage(false);
    }
  }, []);

  const handleAnalyze = useCallback(() => {
    if (!image) return;
    // If user uploaded their own image (not a demo), create a generic analysis
    if (!isDemoImage && (!analysis || analysis.image !== image)) {
      setAnalysis(createGenericAnalysis(image));
    }
    setView('analyzing');
  }, [image, isDemoImage, analysis]);

  const handleAnalysisComplete = useCallback(() => {
    setView('results');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  }, []);

  const handleRestart = useCallback(() => {
    setImage(null);
    setAnalysis(null);
    setIsDemoImage(false);
    setView('analyze');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  }, []);

  const scrollToReimagine = useCallback(() => {
    const el = document.getElementById('reimagine');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="relative min-h-screen grain">
      <AmbientBackground />
      <Navbar onNavigate={scrollTo} onAnalyze={goAnalyze} />

      <main>
        {view === 'home' && (
          <>
            <Hero onAnalyze={goAnalyze} onHowItWorks={() => scrollTo('how')} />
            <HowItWorks />
          </>
        )}

        {view === 'analyze' && (
          <section id="analyze" className="relative min-h-screen pt-28 pb-20 px-4">
            <div className="mx-auto max-w-3xl">
              <div className="text-center mb-12 animate-fade-up">
                <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
                  What are you giving
                  <br />
                  <span className="text-gradient">a second life?</span>
                </h1>
                <p className="mt-5 text-lg text-[#d9c9b0]/50 max-w-md mx-auto">
                  Upload a photo and explore what it could become.
                </p>
              </div>

              <div className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
                {image ? (
                  <ObjectUploader image={image} onImageSet={handleImageSet} onAnalyze={handleAnalyze} />
                ) : (
                  <>
                    <ObjectUploader image={null} onImageSet={handleImageSet} onAnalyze={handleAnalyze} />
                    <div id="demo">
                      <DemoObjects onSelect={handleDemoSelect} />
                    </div>
                  </>
                )}

                {!image && (
                  <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full glass">
                      <ImageOff className="w-4 h-4 text-[#e0a64e]/60" />
                      <span className="text-sm text-[#d9c9b0]/50">
                        Your next second life starts here.
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {view === 'analyzing' && image && (
          <section className="relative min-h-screen pt-28 pb-20 px-4">
            <AnalysisAnimation image={image} onComplete={handleAnalysisComplete} />
          </section>
        )}

        {view === 'results' && analysis && (
          <section className="relative min-h-screen pt-28 pb-20 px-4">
            <div className="mx-auto max-w-5xl">
              <ObjectResult analysis={analysis} onRestart={handleRestart} />

              <div className="mt-12">
                <SecondLifeMap analysis={analysis} onExploreReimagine={scrollToReimagine} />
              </div>

              <div className="mt-20">
                <ReimagineIdeas ideas={analysis.reimaginedIdeas} />
              </div>

              <div className="mt-20">
                <EnvironmentalImpact />
              </div>

              <div className="mt-16 text-center">
                <button
                  onClick={handleRestart}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass text-[#f0e6d6] font-medium hover:bg-[#c2703d]/10 transition-colors"
                >
                  <RotateCcw className="w-4 h-4 text-[#e0a64e]" />
                  Analyze Another Object
                </button>
              </div>
            </div>
          </section>
        )}
      </main>

      {view === 'home' && <Footer onNavigate={scrollTo} />}
      {view !== 'home' && (
        <Footer onNavigate={(id) => { setView('home'); setTimeout(() => scrollTo(id), 100); }} />
      )}
    </div>
  );
}
