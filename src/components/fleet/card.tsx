import { parseType, Project } from "@/actions/projects";
import { IconWorld, IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import { Badge } from "../ui/badge";

export function Card({ image, website, name, description, github, role, skeleton, type }: Partial<Project> & { skeleton?: boolean; }) {
    return (
        <div className={`relative block ${skeleton ? "" : "cursor-pointer"} group h-72`}>
            <div className={`absolute inset-0 rounded-md ${skeleton ? "" : `border-2 border-dashed border-orange-200 transition-transform transform opacity-0 group-hover:opacity-100`} pointer-events-none`} />
            <div className={`border border-gray-900 flex flex-col h-full rounded-md mb-4 transition-transform transform ${skeleton ? "" : `group-hover:-translate-x-2 group-hover:-translate-y-2`} bg-black`}>
                {
                    !skeleton && <>
                        <div className="w-full h-28 bg-cover rounded-t-md" style={{ backgroundImage: `url(${image})` }} />
                        <div className="rounded-b-md py-2 px-4 flex-grow flex flex-col gap-4">
                            <div className="h-20">
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

                                <div className="mt-auto flex gap-2">
                                    {website && (
                                        <Link href={website} className="hover:opacity-60">
                                            <Badge className="flex gap-2 w-fit rounded-md">
                                                <IconWorld size={12} />
                                                Website
                                            </Badge>
                                        </Link>
                                    )}
                                    {github && (
                                        <Link href={github} className="hover:opacity-60">
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
