import { Project } from "@/actions/directus";
import { fetchProject } from "@/actions/projects/fetch";
import { useParams } from "@solidjs/router";
import { Show, createEffect, createSignal } from "solid-js";


export default function Page() {
    const { id } = useParams();

    const [project, setProject] = createSignal<Project | null>(null);

    createEffect(() => {
        fetchProject(id).then(x => setProject(x));
    }, [])

    return (
        <main class="px-8 md:container md:mx-auto">
            <div class="flex flex-col bg-[#E13F32] w-full h-64 rounded-b-md justify-center">
                <Show when={project()} fallback="">
                    <img class="h-48 w-96 aspect-video" src={`https://cms.kagchi.my.id/assets/${project()?.image}`}></img>
                </Show>
            </div>
        </main>
    )
}