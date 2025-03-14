import { stringify } from "qs-esm";
import { Where } from "payload";
import type { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export interface Blog {
    id: string;
    title: string;
    description: string;
    content: SerializedEditorState;
    image: {
        url: string
    };
    slug: string;
}

export interface FetchBlogsResponse {
    blogs: Blog[];
    hasNextPage: boolean;
    curPage: number;
};

export const fetchBlogs = async (page = 1, limit = 20) => {
    try {
        const response = await fetch(`${process.env.VERCEL_URL ?? process.env.NEXT_PUBLIC_API_BASE}/api/posts?limit=${limit}&page=${page}&sort=-createdAt`);

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const { docs, hasNextPage } = await response.json() as { docs: Blog[], hasNextPage: boolean };

        return {
            blogs: docs.map(x => ({
                ...x
            })),
            hasNextPage,
            curPage: page
        };
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
    }
};

export const fetchBlog = async (slug: string) => {
    const query: Where = {
        slug: {
          equals: slug,
        }
    };

    const stringifiedQuery = stringify(
        {
          where: query
        },
        { addQueryPrefix: true },
    )

    console.log(`/api/posts${stringifiedQuery}`);

    const response = await fetch(`${process.env.VERCEL_URL ?? process.env.NEXT_PUBLIC_API_BASE}/api/posts${stringifiedQuery}`)
    const { docs } = await response.json() as { docs: Blog[], hasNextPage: boolean };;

    return docs[0];
};
