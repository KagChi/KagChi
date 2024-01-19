import { action } from "@solidjs/router";

export interface Project {
    id: string;
    name: string;
    image: string;
    description: string;
    role: string;
    github: string;
    links: string[];
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

export const fetchProjects = action(async () => {
    const response = await fetch(`https://cms.kagchi.my.id/items/projects?limit=10`);
    
    const { data } = await response.json() as { data: Project[] };

    return data.map(x => ({ ...x, image: `https://cms.kagchi.my.id/assets/${x.image}`, role: parseRole(x.role) }));
})
