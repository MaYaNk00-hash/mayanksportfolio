import { Database, Layout, Server, Wrench, BrainCircuit } from 'lucide-react';

export const skills = [
    {
        category: 'Programming Languages',
        icon: Layout,
        items: ['Python', 'C', 'C++', 'JavaScript'],
    },
    {
        category: 'Backend & Databases',
        icon: Server,
        items: ['REST APIs', 'FastAPI', 'Flask', 'SQL', 'MongoDB'],
    },
    {
        category: 'Machine Learning',
        icon: BrainCircuit,
        items: ['Regression', 'Classification', 'Model Evaluation', 'Feature Engineering'],
    },
    {
        category: 'Libraries & Tools',
        icon: Wrench,
        items: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Git', 'GitHub', 'VS Code'],
    },
    {
        category: 'Core Concepts',
        icon: Database,
        items: ['Data Structures & Algorithms', 'Probability', 'Statistics'],
    },
];
