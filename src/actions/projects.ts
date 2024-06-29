"use server";

export interface Project {
    id: string;
    name: string;
    image: string;
    description: string;
    role: string;
    links: string[];
    own_project: boolean;
    type: string;
    github?: string;
    website?: string;
}

function parseRole(role: string) {
    switch (role) {
        case "fullstack":
            return "Fullstack Developer";
        case "frontend":
            return "Frontend Developer";
        case "backend":
            return "Backend Developer";
        default:
            return "Unknown";
    }
}

function parseType(type: string) {
    switch (type) {
        case "comission":
            return "Comissioned Project";
        case "self_project":
            return "Self Project";
        case "volunteer":
            return "Volunteer";
        default:
            return "Unknown";
    }
}

export const fetchProjects = async () => {
    const response = await fetch("https://cms.kagchi.my.id/items/projects?limit=10");
    
    const { data } = await response.json() as { data: Project[] };

    return data.map(x => ({ ...x, image: `https://cms.kagchi.my.id/assets/${x.image}`, role: parseRole(x.role), type: x.type }));
};

