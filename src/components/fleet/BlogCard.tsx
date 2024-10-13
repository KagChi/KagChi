import { Blog } from "@/actions/blogs";
import Link from "next/link";
import { Badge } from "../ui/badge";
import React, { forwardRef } from "react";

interface BlogCardProps extends Partial<Blog> {
    skeleton?: boolean;
}

const BlogCard = forwardRef<HTMLAnchorElement, BlogCardProps>(({ image, title, slug, tags, description, skeleton }, ref) => {
    return (
        <Link
            href={skeleton ? "#" : `/blog/${slug}`}
            ref={ref}
            className={`relative block ${skeleton ? "" : "cursor-pointer"} group h-80`}
        >
            <div
                className={`absolute inset-0 rounded-md ${skeleton ? "" : `border-2 border-dashed border-orange-200 transition-transform transform opacity-0 group-hover:opacity-100`} pointer-events-none`}
            />
            <div
                className={`border border-gray-900 flex flex-col h-full rounded-md mb-4 transition-transform transform ${skeleton ? "" : `group-hover:-translate-x-2 group-hover:-translate-y-2`} bg-black`}
            >
                {
                    !skeleton && <>
                        <div className="w-full h-40 bg-cover rounded-t-md" style={{ backgroundImage: `url(${image})` }} />
                        <div className="rounded-b-md py-2 px-4 flex-grow flex flex-col gap-6">
                            <div className="h-24">
                                <p className="font-bold">{title}</p>
                                <p className="text-xs text-gray-500 line-clamp-4">{description}</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="mt-auto flex gap-2">
                                    {tags && tags.map((tag, index) => (
                                        <Badge key={index} className="flex gap-2 w-fit rounded-md">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                }
                {
                    skeleton && <div className="size-full rounded-md bg-gray-700 animate-pulse" />
                }
            </div>
        </Link>
    );
});

BlogCard.displayName = 'BlogCard';

export { BlogCard };
