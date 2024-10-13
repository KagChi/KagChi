import { fetchBlog } from "@/actions/blogs";
import BlurIn from "@/components/magicui/blur-in";
import Link from "next/link";

import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

export const runtime = 'edge';

export async function generateMetadata({ params }: { params: { slug: string; } }, parent: ResolvingMetadata): Promise<Metadata> {
    try {
        const blog = await fetchBlog(params.slug);
   
        return {
            title: blog.title,
            description: blog.description,
            openGraph: {
                images: [{ url: blog.image, alt: blog.title }],
            },
        }
    } catch {
        const meta = await parent;
        return {
            title: meta.title,
            description: meta.description,
            openGraph: {
                images: meta.openGraph?.images ?? []
            }
        };
    }
}

export default async function BlogPage({ params }: { params: { slug: string; }; }) {
    let blog;
    try {
        blog = await fetchBlog(params.slug);
        if (!blog) {
            return notFound();
        }
    } catch (error) {
        return notFound();
    }

    return (
        <>
            <main className="container pt-10 md:pt-20 max-w-6xl px-6">
                <BlurIn>
                    <Link href="/blog" className="text-blue-500 hover:underline mb-4 inline-block">← Back to Blog</Link>
                    <p className="font-bold text-2xl md:text-5xl">{blog.title}</p>
                    <p className="text-gray-500 md:text-lg mt-1">{blog.description}</p>
                </BlurIn>

                <BlurIn className="mt-12 pb-28">
                    <div className="prose prose-lg max-w-none">
                        <img src={blog.image} alt={blog.title} className="w-full h-80 object-cover rounded-md mb-6" />

                        <div className="rich-text" dangerouslySetInnerHTML={{ __html: blog.content }} />
                    </div>
                    
                    <Link href="#top" className="text-blue-500 hover:underline mt-4 inline-block">↑ Back to Top</Link>
                </BlurIn>
            </main>
        </>
    );
}
