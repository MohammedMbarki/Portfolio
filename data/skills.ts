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
    { name: 'SQL', category: 'Languages', logoKey: 'mysql' },
    { name: 'Go', category: 'Languages', logoKey: 'go' },
  ],
  'Frameworks/Libraries': [
    { name: 'React.js', category: 'Frameworks/Libraries', logoKey: 'react' },
    { name: 'Node.js', category: 'Frameworks/Libraries', logoKey: 'nodejs' },
    { name: 'Next.js', category: 'Frameworks/Libraries', logoKey: 'nextjs' },
    { name: 'Flask', category: 'Frameworks/Libraries', logoKey: 'flask' },
    { name: 'Tailwind CSS', category: 'Frameworks/Libraries', logoKey: 'tailwindcss' },
    { name: 'Android SDK', category: 'Frameworks/Libraries', logoKey: 'android' },
    { name: 'Three.js', category: 'Frameworks/Libraries', logoKey: 'threejs' },
    { name: 'Flutter', category: 'Frameworks/Libraries', logoKey: 'flutter' },
    { name: 'React Native', category: 'Frameworks/Libraries', logoKey: 'react' },
  ],


  'Cloud/DevOps': [
    { name: 'AWS', category: 'Cloud/DevOps', logoKey: 'amazonwebservices' },
    { name: 'Docker', category: 'Cloud/DevOps', logoKey: 'docker' },
    { name: 'Firebase', category: 'Cloud/DevOps', logoKey: 'firebase' },
    { name: 'Git', category: 'Cloud/DevOps', logoKey: 'git' },
 
  ],
    'operating Systems': [
    { name: 'Linux', category: 'operating Systems', logoKey: 'linux' },
    { name: 'Windows', category: 'operating Systems', logoKey: 'windows' },
    { name: 'MacOS', category: 'operating Systems', logoKey: 'apple' },
 
  ],

};

// Helper functions
export const getAllSkills = () => {
  return Object.values(skills).flat();
};

export const getCategories = () => {
  return Object.keys(skills) as SkillCategory[];
};