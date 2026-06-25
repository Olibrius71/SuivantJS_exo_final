import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TechnologyType } from "@/types/technology";

interface TechnologiesStoreType {
  technologies: TechnologyType[];
  addTechnology: (technology: TechnologyType) => void;
  removeTechnology: (id: number) => void;
}

export const useTechnologiesStore = create<TechnologiesStoreType>()(
  persist(
    (set, get) => ({
      technologies: [
        { id: 1, name: "React" },
        { id: 2, name: "Next.js" },
        { id: 3, name: "Tailwind CSS" }
      ], // Initial dummy data
      addTechnology: (technology: TechnologyType) => set({ technologies: [...get().technologies, technology] }),
      removeTechnology: (id: number) => set({ technologies: get().technologies.filter((t) => t.id !== id) }),
    }),
    {
      name: "management-technologies"
    }
  )
);
