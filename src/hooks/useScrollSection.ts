import { useScrollStore } from "@/stores/useScrollStore";
import { useEffect, useState } from "react";

export const useScrollSection = (numSections: number) => {
    const handleScroll = useScrollStore((state) =>
        state.handleScroll(numSections)
    );
    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            event.preventDefault();
            handleScroll(event);
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [handleScroll]);

    return useScrollStore((state) => state.currentSection);
};

export default useScrollSection;
