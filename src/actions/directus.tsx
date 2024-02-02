import { createDirectus, rest } from "@directus/sdk";

export interface Project {
    id: string;
    name: string;
    image: string;
    description: string;
    role: string;
    github: string;
    links: string[];
}


interface Schema {
    projects: Project[]
}

export const directus = createDirectus<Schema>('https://cms.kagchi.my.id').with(rest())
