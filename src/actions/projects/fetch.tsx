import { readItem, readItems } from "@directus/sdk";
import { directus } from "../directus";

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

export const fetchProjects = async () => {
    const response = await directus.request(
        readItems("projects", {
            limit: 10
        })
    );

    return response.map(x => ({ ...x, image: `https://cms.kagchi.my.id/assets/${x.image}`, role: parseRole(x.role) }));
}

export const fetchProject = async (id: string) => {
    const response = await directus.request(
        readItem("projects", id)
    );

    return response;
}
