import { useScrollStore } from "@/stores/useScrollStore";
import { useEffect, useState } from "react";

export const useScrollSection = (numSections: number) => {
    const handleScroll = useScrollStore((state) =>
        state.handleScroll(numSections)
    );
    useEffect(() => {
        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, [handleScroll]);

    return useScrollStore((state) => state.currentSection);
};

export default useScrollSection;
