import BlurIn from "@/components/magicui/blur-in";

export const runtime = "edge";

export default async function Blog() {

    return (
        <main className="container pt-10 md:pt-20 max-w-2xl px-6">
            <BlurIn>
                <p className="font-bold text-2xl md:text-5xl">Blog</p>
                <p className="text-gray-500 md:text-lg mt-1">Exploring the World of IT with Enthusiasm and Insight</p>
            </BlurIn>

            <BlurIn className="mt-12">
                <p>There are not blogs as for now...</p>
            </BlurIn>
        </main>
    );
}
