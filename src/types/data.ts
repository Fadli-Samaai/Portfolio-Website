import { supabase } from '../supabase/supabaseClient'; 


export interface ProjectWithSkills {
    id: string
    title: string | null
    description: string | null
    image: string
    demoUrl: string
    githubUrl: string
    tags: string[]
}

export const fetchProjects = async (): Promise<ProjectWithSkills[]> => {
    const { data: projects, error: projectError } = await supabase
        .from('projects')
        .select('*')

    if (projectError) {
        console.error('Error fetching projects:', projectError)
        return []
    }

    const { data: projectSkills, error: psError } = await supabase
        .from('project_skills')
        .select('*')

    const { data: skills, error: skillError } = await supabase
        .from('skills')
        .select('*')

    if (psError || skillError) {
        console.error('Error fetching skills or project-skills:', psError, skillError)
        return []
    }

    const skillMap = new Map(skills?.map(s => [s.id, s.name]))

    return projects.map(project => ({
        id: project.id,
        title: project.title,
        description: project.description,
        image: project.image_url ?? '/Images/default.png',
        demoUrl: project.demo_url ?? '#',
        githubUrl: project.github_url ?? '#',
        tags: projectSkills
        .filter(ps => ps.project_id === project.id)
        .map(ps => skillMap.get(ps.skill_id) || 'Unknown')
    }))
}

export interface Skill {
    name: string;
    category: string;
}

export const fetchSkills = async (): Promise<Skill[]> => {
    const { data: skills, error } = await supabase
        .from('skills')
        .select('name, category');

    if (error) {
        console.error('Error fetching skills:', error);
        return [];
    }

    return skills.map(skill => ({
        name: skill.name,
        category: skill.category ?? 'uncategorized',
    }));
};


export const fetchSkillCategories = async (): Promise<string[]> => {
    const { data, error } = await supabase
        .from('skills')
        .select('category')
        .neq('category', null); 

    if (error) {
        console.error('Error fetching skill categories:', error);
        return [];
    }

    // Extract unique categories
    const categoriesSet = new Set<string>();
    data.forEach(skill => {
        if (skill.category) {
            categoriesSet.add(skill.category);
        }
    });

    return Array.from(categoriesSet).sort();
};
