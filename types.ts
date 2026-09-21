export type PathwayKey = 'repair' | 'reuse' | 'donate' | 'recycle';

export interface PathwayStep {
  num: string;
  text: string;
}

export interface PathwayDetail {
  key: PathwayKey;
  label: string;
  tagline: string;
  description: string;
  whyItWorks: string;
  nextSteps: PathwayStep[];
  effort: 'Low' | 'Medium' | 'High';
  icon: string;
}

export type Difficulty = 'Easy' | 'Medium' | 'Advanced';

export interface TutorialStep {
  num: string;
  title: string;
  text: string;
  materials?: string;
}

export interface ReimaginedIdea {
  id: string;
  title: string;
  description: string;
  image: string;
  difficulty: Difficulty;
  materials: string[];
  tutorial: {
    intro: string;
    steps: TutorialStep[];
    safetyNote?: string;
  };
}

export interface EnvironmentalFact {
  icon: string;
  title: string;
  text: string;
}

export interface ObjectAnalysis {
  id: string;
  name: string;
  image: string;
  identifiedAs: string;
  condition: string;
  materials: string;
  possibleCurrentUse: string;
  confidence: 'Low' | 'Moderate' | 'High';
  safetyNote?: string;
  availablePaths: PathwayKey[];
  pathways: Record<PathwayKey, PathwayDetail>;
  reimaginedIdeas: ReimaginedIdea[];
}
