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