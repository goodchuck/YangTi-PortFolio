import create from "zustand";

interface ScrollStore {
    currentSection: number;
    isScrolling: boolean;
    setCurrentSection: (section: number) => void;
    setIsScrolling: (scrolling: boolean) => void;
    handleScroll: (numSections: number) => (event: WheelEvent) => void;
}

export const useScrollStore = create<ScrollStore>((set, get) => ({
    currentSection: 0,
    isScrolling: false,
    setCurrentSection: (section) => set({ currentSection: section }),
    setIsScrolling: (scrolling) => set({ isScrolling: scrolling }),
    handleScroll: (numSections) => (event) => {
        const {
            currentSection,
            isScrolling,
            setCurrentSection,
            setIsScrolling,
        } = get();

        if (isScrolling) return;

        const sectionElement = document.querySelector(
            `.section-${currentSection}`
        );
        if (!sectionElement) return;
        const maxScrollTop = sectionElement?.scrollHeight - window.innerHeight;

        if (event.deltaY > 0) {
            if (sectionElement && sectionElement.scrollTop < maxScrollTop) {
                sectionElement.scrollBy({
                    top: event.deltaY,
                    behavior: "smooth",
                });
            } else if (currentSection < numSections - 1) {
                setCurrentSection(currentSection + 1);
                setIsScrolling(true);
                setTimeout(() => {
                    setIsScrolling(false);
                }, 1000);
            }
        } else if (event.deltaY < 0) {
            if (sectionElement && sectionElement.scrollTop > 0) {
                sectionElement.scrollBy({
                    top: event.deltaY,
                    behavior: "smooth",
                });
            } else if (currentSection > 0) {
                setCurrentSection(currentSection - 1);
                setIsScrolling(true);
                setTimeout(() => {
                    setIsScrolling(false);
                }, 1000);
            }
        }
    },
}));
