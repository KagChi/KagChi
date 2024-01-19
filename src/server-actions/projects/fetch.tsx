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
    "use server";
    const { config } = await import("@/config");
    const response = await fetch(`${config.CMS_BASE_SERVER}/items/projects?limit=10`, {
        headers: {
            "Authorization": `Bearer ${config.CMS_TOKEN}`
        }
    });
    
    const { data } = await response.json() as { data: Project[] };

    return data.map(x => ({ ...x, image: `${config.CMS_BASE_SERVER}/assets/${x.image}`, role: parseRole(x.role) }));
})
