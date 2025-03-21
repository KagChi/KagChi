import { parseType, Project } from "@/actions/projects";
import { IconWorld, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

export function ProjectCard({ image, url, name, description, git, role, skeleton, type }: Partial<Project> & { skeleton?: boolean; }) {
    return (
        <div className={`relative block ${skeleton ? "" : "cursor-pointer"} group h-96`}>
            <div className={`absolute inset-0 rounded-md ${skeleton ? "" : `border-2 border-dashed border-orange-200 transition-transform transform opacity-0 group-hover:opacity-100`} pointer-events-none`} />
            <div className={`border border-gray-900 flex flex-col h-full rounded-md mb-4 transition-transform transform ${skeleton ? "" : `group-hover:-translate-x-2 group-hover:-translate-y-2`} bg-black`}>
                {
                    !skeleton && <>
                        <div className="w-full h-40 bg-cover rounded-t-md" style={{ backgroundImage: `url(${image?.url})` }} />
                        <div className="rounded-b-md py-2 px-4 flex-grow flex flex-col gap-4">
                            <div className="h-24">
                                <p className="font-bold">{name}</p>
                                <p className="text-xs text-gray-500 line-clamp-4">{description}</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="mt-auto flex gap-2">
                                    {role && (
                                        <Badge className="flex gap-2 w-fit rounded-md">
                                            {role}
                                        </Badge>
                                    )}
                                </div>

                                <div className="mt-auto flex flex-wrap gap-2">
                                    {url && (
                                        <Link href={url} className="hover:opacity-60">
                                            <Badge className="flex gap-2 w-fit rounded-md">
                                                <IconWorld size={12} />
                                                Website
                                            </Badge>
                                        </Link>
                                    )}
                                    {git && (
                                        <Link href={git} className="hover:opacity-60">
                                            <Badge className="flex gap-2 w-fit rounded-md">
                                                <IconBrandGithub size={12} />
                                                Source
                                            </Badge>
                                        </Link>
                                    )}

                                    {type && (
                                        <Badge className="flex gap-2 w-fit rounded-md">
                                            {parseType(type)}
                                        </Badge>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                }
                {
                    skeleton && <div className="size-full rounded-md bg-gray-700 animate-pulse" />
                }
            </div>
        </div>
    );
}
