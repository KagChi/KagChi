export interface Blog {
    id: string;
    title: string;
    description: string;
    content: string;
    image: string;
    slug: string;
    tags: string[];
}

export interface FetchBlogsResponse {
    blogs: Blog[];
    hasNextPage: boolean;
    curPage: number;
};

export const fetchBlogs = async (page = 1, limit = 20) => {
    try {
        const response = await fetch(`https://cms.kagchi.my.id/items/blogs?limit=${limit}&page=${page}&sort=-date_created`);

        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const { data } = await response.json() as { data: Blog[] };

        const hasNextPage = data.length === limit;

        return {
            blogs: data.map(x => ({
                ...x,
                image: `https://cms.kagchi.my.id/assets/${x.image}`
            })),
            hasNextPage,
            curPage: page
        };
    } catch (error) {
        console.error("Failed to fetch blogs:", error);
        throw error; // Rethrow the error to be caught in the component
    }
};



export const fetchBlog = async (slug: string) => {
    const response = await fetch(`https://cms.kagchi.my.id/items/blogs?filter[slug][_eq]=${slug}`);
    
    const { data } = await response.json() as { data: Blog[] };

    return data.map(x => ({ 
        ...x, 
        image: `https://cms.kagchi.my.id/assets/${x.image}` 
    }))[0];
};
