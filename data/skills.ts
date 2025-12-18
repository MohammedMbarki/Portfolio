// data/skills.ts
export type SkillCategory = 
  | 'Languages' 
  | 'Frameworks/Libraries' 
  | 'Cloud/DevOps' 
  | 'operating Systems' 

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL
}

export const skills: Record<SkillCategory, Skill[]> = {
  'Languages': [
    { name: 'C', category: 'Languages', logoKey: 'c' },
    { name: 'Python', category: 'Languages', logoKey: 'python' },
    { name: 'JavaScript', category: 'Languages', logoKey: 'javascript' },
    { name: 'TypeScript', category: 'Languages', logoKey: 'typescript' },
    { name: 'Dart', category: 'Languages', logoKey: 'dart' },
  ],
  'Frameworks/Libraries': [
    { name: 'React.js', category: 'Frameworks/Libraries', logoKey: 'react' },
    { name: 'Node.js', category: 'Frameworks/Libraries', logoKey: 'nodejs' },
    { name: 'Next.js', category: 'Frameworks/Libraries', logoKey: 'nextjs' },
    { name: 'Tailwind CSS', category: 'Frameworks/Libraries', logoKey: 'tailwindcss' },
    { name: 'Three.js', category: 'Frameworks/Libraries', logoKey: 'threejs' },
    { name: 'Flutter', category: 'Frameworks/Libraries', logoKey: 'flutter' },
  ],


  'Cloud/DevOps': [
    { name: 'AWS', category: 'Cloud/DevOps', logoKey: 'amazonwebservices' },
    { name: 'Docker', category: 'Cloud/DevOps', logoKey: 'docker' },
    { name: 'Firebase', category: 'Cloud/DevOps', logoKey: 'firebase' },
    { name: 'Git', category: 'Cloud/DevOps', logoKey: 'git' },
 
  ],
    'operating Systems': [
    { name: 'Linux', category: 'operating Systems', logoKey: 'linux' }, 
    
  ],

};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};