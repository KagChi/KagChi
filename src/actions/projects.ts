export interface Project {
    id: string;
    name: string;
    image: { url: string };
    description: string;
    role: string;
    type: string;
    git?: string;
    url?: string;
}

function parseRole(role: string) {
    switch (role) {
        case "fullstack_developer":
            return "Fullstack Developer";
        case "frontend_developer":
            return "Frontend Developer";
        case "backend_developer":
            return "Backend Developer";
        default:
            return "Unknown";
    }
}

export function parseType(type: string) {
    switch (type) {
        case "comission":
            return "Comissioned Project";
        case "self_project":
            return "Self Project";
        case "volunteer":
            return "Volunteer";
        case "hobby":
            return "Hobby";
        default:
            return "Unknown";
    }
}

export const fetchProjects = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/api/projects?limit=60&sort=-createdAt`);
    const { docs } = await response.json() as { docs: Project[] };

    return docs.map(x => ({ 
        ...x,
        role: parseRole(x.role), 
        type: x.type 
    }));
};
