import { Project } from "@/actions/projects";
import { IconWorld, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

export function Card({ image, website, name, description, github }: Project) {
    return (
        <div className="flex flex-col h-full rounded-md mb-4">
            <div className={`w-full object-cover h-28 rounded-t-md bg-cover`} style={{ backgroundImage: `url(${image})` }} />

            <div className="border-r border-l border-b rounded-b border-gray-900 py-2 px-4 flex-grow flex flex-col gap-4">
                <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-xs text-gray-500">{description}</p>
                </div>


                <div className="mt-auto flex flex-row gap-2">
                    {website && <Link href={website} className="hover:opacity-60">
                        <Badge className="flex flex-row gap-2 w-fit rounded-md">
                            <IconWorld size={12} />
                            Website
                        </Badge>
                    </Link>}

                    {github && <Link href={github} className="hover:opacity-60">
                        <Badge className="flex flex-row gap-2 w-fit rounded-md">
                            <IconBrandGithub size={12} />
                            Source
                        </Badge>
                    </Link>}
                </div>
            </div>
        </div>
    )
}