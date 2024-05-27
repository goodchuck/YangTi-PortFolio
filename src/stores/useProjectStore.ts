import create from "zustand";

interface ProjectStore {
    projectRefs: (HTMLDivElement | null)[];
    setProjectRefs: (refs: (HTMLDivElement | null)[]) => void;
    scrollToProject: (id: string) => void;
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
    projectRefs: [],
    setProjectRefs: (refs) => set({ projectRefs: refs }),
    scrollToProject: (id) => {
        const refs = get().projectRefs;
        // console.log("scrollToProject", id, refs);
        for (let ref of refs) {
            // console.log("ref", ref, ref);
            if (ref && ref.id === id) {
                ref.scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                });
            }
        }
    },
}));
