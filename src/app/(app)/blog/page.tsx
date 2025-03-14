"use client";

import { fetchBlogs } from "@/actions/blogs";
import { BlogCard } from "@/components/fleet/BlogCard";
import BlurIn from "@/components/magicui/blur-in";
import { Show, For } from "@kagchi/nextify";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useRef, useEffect } from "react";

export default function Blog() {
    const {
        isLoading,
        isError,
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey: ['blogs'],
        queryFn: ({ pageParam = 1 }) => fetchBlogs(pageParam, 9),
        getNextPageParam: (lastPage) => {
            return lastPage?.hasNextPage ? lastPage?.curPage + 1 : undefined;
        },
        initialPageParam: 1,
    });

    const observer = useRef<IntersectionObserver | null>(null);
    
    const lastBlogElementRef = (node: HTMLElement | null) => {
        if (isLoading || isFetchingNextPage) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasNextPage) {
                fetchNextPage();
            }
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        });

        if (node) observer.current.observe(node);
    };

    useEffect(() => {
        return () => {
            if (observer.current) observer.current.disconnect();
        };
    }, []);

    const pages = data?.pages.filter(x => x !== undefined) ?? [];

    return (
        <main className="container pt-10 md:pt-20 max-w-6xl px-6">
            <BlurIn>
                <p className="font-bold text-2xl md:text-5xl">Blog</p>
                <p className="text-gray-500 md:text-lg mt-1">Exploring the World of IT with Enthusiasm and Insight</p>
            </BlurIn>

            <BlurIn className="my-12 flex flex-col gap-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-6">
                    <Show when={isLoading && pages.length === 0}>
                        <For each={Array(9).fill(null)}>
                            {(x, i) => <BlogCard skeleton key={i} />}
                        </For>
                    </Show>

                    <Show when={isError}>
                        <p>Error loading blogs. Please try again later.</p>
                    </Show>

                    <Show when={pages.length > 0}>
                        <For each={pages}>
                            {(page, pageIndex) => (
                                <For each={page.blogs} key={pageIndex}>
                                    {(blog, blogIndex) => (
                                        <BlogCard
                                            {...blog}
                                            key={`${pageIndex}-${blogIndex}`}
                                            ref={pageIndex === pages.length - 1 && blogIndex === page.blogs.length - 1 ? lastBlogElementRef : null}
                                        />
                                    )}
                                </For>
                            )}
                        </For>
                    </Show>
                </div>
            </BlurIn>
        </main>
    );
}
