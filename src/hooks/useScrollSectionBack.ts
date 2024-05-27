import { useEffect, useState } from "react";

export const useScrollSection = (numSections: number) => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = (event: WheelEvent) => {
        if (isScrolling) return;

        const sectionElement = document.querySelector(
            `.section-${currentSection}`
        );
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
    };

    useEffect(() => {
        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [currentSection, isScrolling]);

    return [currentSection, setCurrentSection];
};

export default useScrollSection;
